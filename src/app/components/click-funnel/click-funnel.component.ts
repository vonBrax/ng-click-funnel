// TODO: BUILD AND SEE IF IT WILL WORK!!!! =)


import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger, state } from '@angular/animations';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MixpanelService } from '../../services/mixpanel.service';

import { Strings } from '../../models/strings';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeUntil';

declare var lp;

@Component({
  selector: 'app-click-funnel',
  templateUrl: './click-funnel.component.html',
  styleUrls: ['./click-funnel.component.css'],
  providers: [
    MixpanelService,
    Location,
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  animations: [
    trigger('answersAnimation', [

      state('forwards', style({transform: 'translateX(0)'})),
      state('backwards', style({transform: 'translateX(0)'})),

      transition('* => forwards', [
        animate('.4s ease-out', keyframes([
            style({opacity: 0,   transform: 'translateX(100%)',   offset: 0}),
            style({opacity: .5,   transform: 'translateX(-5px)',   offset: 0.4}),
            style({opacity: 1 ,   transform: 'translateX(0)',    offset: 1.0})
        ]))
      ]),

      transition('* => backwards', [
        animate('.4s ease-out', keyframes([
            style({opacity: 0,   transform: 'translateX(-100%)',   offset: 0}),
            style({opacity: .5,   transform: 'translateX(5px)',   offset: 0.4}),
            style({opacity: 1 ,   transform: 'translateX(0)',    offset: 1.0})
        ]))
      ])
    ]),

    trigger('headlineAnimation', [
      transition(':enter', [
        style({
          opacity: .4
        }),
        animate('.4s ease-in'), style({
          opacity: 1
        })
      ])
    ])
  ]
})

export class ClickFunnelComponent implements OnInit, AfterViewInit, OnDestroy {

  funnel: any[] = Strings.funnel;
  funnelName: string = Strings.funnel_name;
  funnelLength = this.funnel.length;
  currValue: string;
  formGroup: FormGroup;
  ubForm: any;
  landingUrl: string;
  urlParams: string;
  cursor: number;
  progressBarValue = 0;
  clickEvent$: Observable<MouseEvent>;
  checked;
  animationDirection = 'forwards';

  // Safely unsubscribe observables
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  @ViewChild('wrapper')
  wrapper: ElementRef;
  @ViewChild('ubFormWrapper')
  ubFormWrapper: ElementRef;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private mixpanelService: MixpanelService ) { }

  ngOnInit() {
    this.cursor = 0;
    this.checked = new Array(this.funnelLength);
    this.setForm();
    this.initUrl();
    this.mixpanelService.init(this.funnelName, this.funnel[0].name);
  }

  ngAfterViewInit() {
    this.clickEvent$ = Observable.fromEvent( this.wrapper.nativeElement, 'click');
    this.clickEvent$
      .takeUntil(this.ngUnsubscribe)
      .filter(evt => evt.srcElement.tagName.toLowerCase() === 'input' )
      .subscribe(evt => {
        this.next();
    });
    this.ubForm = this.getUnbounceForm();
    if (this.ubForm) {
      this.initUnbounce();
    } else {
      // console.log('Unbounce form not found. Setting timeout...');
      setTimeout(() => {
        this.ubForm = this.getUnbounceForm();
        if (this.ubForm) {
          this.initUnbounce();
        } else {
          // console.log('STILL NO FORM AFTER TIMEOUT!!!');
        }
      });
    }
  }

  back(): void {
    if ( this.cursor === 0 ) { return; }
    this.mixpanelService.track('Clicked Back Button', {
      step: this.cursor + 1,
      name: this.funnel[this.cursor].name
    });
    this.cursor--;
    this.animationDirection = 'backwards';
    this.updateUrl();
    this.progressBarValue = Math.round((100 * this.cursor) / this.funnelLength );
    const prevStep = this.cursor > 0 ?
      this.funnel[this.cursor - 1].name + ' - ' + this.formGroup.get(this.funnel[this.cursor - 1].name).value :
        null;
    this.mixpanelService.step({
        step: this.cursor + 1,
        name: this.funnel[this.cursor].name,
        prevStepValue: prevStep
    });
  }

  createHiddenFields(name: string, fields?: any, value?: string) {
    if (!name || !this.ubForm) { console.log('Could not create hidden fields'); return; }
    const formInner = this.ubForm.querySelector('.fields') || this.ubForm;
    const isSingleField = fields ? false : true;
    const len = isSingleField ? 1 : fields.length;

    for (let i = 0; i < len; i++) {
      const el = document.createElement('input');
      let fieldName;
      if (!isSingleField) {
        fieldName = fields[i].name;
        el.setAttribute('data-path', name);
      } else {
        fieldName = name;
      }
      el.setAttribute('type', 'hidden' );
      el.setAttribute('class', 'hidden' );
      el.setAttribute('id', fieldName);
      el.setAttribute('name', fieldName);
      if (value) {
        el.value = value;
      }
      formInner.appendChild(el);
    }
  }

  getUnbounceForm(): any {
    const form = this.ubFormWrapper.nativeElement.querySelector('form');
    return form ? form : null;
  }

  initUnbounce() {
    this.setUnbounceFields();
    this.parseQueryParams(this.urlParams);
  }

  initUrl(): void {
    this.landingUrl = window.location.href;
    const url = this.location.path();
    let newUrl;
    const hasParams = /\?/.test(url);
    if ( hasParams && /step=/.test(url) ) {
      newUrl = url.replace(/step=[^&]+/, 'step=1');
    } else if (hasParams) {
      newUrl = url + '&step=1';
    } else {
      newUrl = url + '?step=1';
    }
    this.location.replaceState(newUrl);
    this.urlParams = url.slice(url.indexOf('?') + 1 );
  }

  next() {
    if (this.cursor === this.funnelLength - 1 ) { return; }

    setTimeout( () => {
      const prevStepVal = this.formGroup.get(this.funnel[this.cursor].name).value;
      const prevStepName = this.funnel[this.cursor].name;
      if( prevStepName === 'additional_info') {
        const currVal = this.formGroup.get(prevStepName).value;
      }
      this.animationDirection = 'forwards';
      this.cursor++;
      this.updateUrl();
      this.progressBarValue = Math.round((100 * this.cursor) / this.funnelLength );

      this.mixpanelService.step({
        step: this.cursor + 1,
        name: this.funnel[this.cursor].name,
        prevStepValue: prevStepName + ' - ' + prevStepVal
      });
    }, 100 );
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log('YEP!! ALL GOOD!');
      console.log(JSON.stringify(this.formGroup.value, null, 2));
      this.setUnbounceForm();
      this.mixpanelService.submit(this.formGroup.get(this.funnel[this.funnelLength - 1].name).value);
      this.progressBarValue = 100;
      console.log(typeof(lp));
      console.log(typeof(lp.jQuery));
      lp.jQuery(this.ubForm).submit();

    } else {
      console.log('Something is wrong with your form, bro...');
    }
  }

  parseQueryParams(params) {
    if (!params) {
      this.createHiddenFields('error', null, 'No parameters in the url');
    } else {
      const pairs = params.split('&');
      pairs.forEach(pair => {
        const _pairs = pair.split('=');
        if (_pairs[0] !== 'step') { this.createHiddenFields(_pairs[0], null, _pairs[1]); }
      });
    }
  }

  setForm() {
    const controls = {};
    this.funnel.forEach( step => {
      if (step.fields) {
        const nestedControls = {};
        for (let i = 0; i < step.fields.length; i++) {
          nestedControls[step.fields[i].name] = [ '', Validators[step.fields[i].validators] ];
        }
        nestedControls['tos_signoff'] = ['', Validators.requiredTrue ];
        controls[step.name] = this.fb.group(nestedControls);
      } else {
        controls[step.name] = [ '', Validators[step.validators] ];
      }
    });
    this.formGroup = this.fb.group(controls);
  }

  setUnbounceFields() {
    this.funnel.forEach(step => {
      this.createHiddenFields(step.name, step.fields);
    });
    this.createHiddenFields('jlp', null, this.landingUrl);
    // if (localStorage.getItem('jlp')) { this.createHiddenFields('jlp', null, localStorage.getItem('jlp')); }
  }

  setUnbounceForm() {
    if (!this.ubForm) { return; }
    const fieldsArr = Array.prototype.slice.call(this.ubForm.querySelectorAll('.fields input'));
    fieldsArr.forEach(field => {
      const path = field.dataset.path ? field.dataset.path + '.' + field.name : field.name;
      if (this.formGroup.get(path)) {
        field.value = this.formGroup.get(path).value;
      }
    });
  }

  updateUrl(): void {
    this.location.replaceState(this.location.path().replace(/step=[^&]+/, 'step=' + (this.cursor + 1)));
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
