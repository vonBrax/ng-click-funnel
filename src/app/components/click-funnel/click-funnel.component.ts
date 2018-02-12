import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { trigger, style, transition, animate, keyframes, state } from '@angular/animations';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormBuilder, FormGroup, Validators/*  , AbstractControl */ } from '@angular/forms';

import { MixpanelService } from '../../services/mixpanel.service';
import { EmailValidatorService } from '../../services/email.validator.service';

import { Strings } from '../../models/strings';

// import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';
// import 'rxjs/add/observable/fromEvent';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/takeUntil';

declare var lp, replaceUb;

@Component({
  selector: 'app-click-funnel',
  templateUrl: './click-funnel.component.html',
  styleUrls: ['./click-funnel.component.css'],
  providers: [
    MixpanelService,
    EmailValidatorService,
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

export class ClickFunnelComponent implements OnInit, AfterViewInit /* , OnDestroy */ {

  funnel: any[] = Strings.funnel;
  funnelName: string = Strings.funnel_name;
  funnelLength = this.funnel.length;
  submittingForm = false;
  currValue: string;
  formGroup: FormGroup;
  ubForm: any;
  ubFields: any = {};
  landingUrl: string;
  urlParams: string;
  cursor: number;
  progressBarValue = 0;
  // clickEvent$: Observable<any>;
  checked;
  animationDirection = 'forwards';

  // Safely unsubscribe observables
  // private ngUnsubscribe: Subject<void> = new Subject<void>();

  // @ViewChild('wrapper')
  // wrapper: ElementRef;

  @ViewChild('ubFormWrapper')
  ubFormWrapper: ElementRef;
  @ViewChild('container')
  container: ElementRef;
  @ViewChild('stepQuestion')
  stepQuestion: ElementRef;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private mixpanelService: MixpanelService,
    private emailValidator: EmailValidatorService ) { }

  ngOnInit() {
    this.cursor = 0;
    this.checked = new Array(this.funnelLength);
    this.setForm();
    this.initUrl();
    this.mixpanelService.init(this.funnelName, this.funnel[0].name);
  }

  ngAfterViewInit() {
    if (typeof replaceUb === 'function' ) { replaceUb(); }

    // this.clickEvent$ = Observable.fromEvent( this.wrapper.nativeElement, 'click');
    // this.clickEvent$
    //   .takeUntil(this.ngUnsubscribe)
    //   .filter(evt => {
    //     console.log('Incoming click...');
    //     console.log(evt.target);
    //     /* return evt.srcElement ? evt.srcElement.tagName.toLowerCase() === 'label' :
    //       evt.target.tagName.toLowerCase() === 'label'; */
    //       return evt.target.tagName.toLowerCase() === 'input';
    //   })
    //   .subscribe(evt => {
    //     this.next();
    // });

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

    /*  setTimeout( () => {
      this.firstOption.nativeElement.focus();
    }); */

  }

  handleClick(evt) {
    // console.log('Clicks are here!');
    // console.log(evt.target);
    if (evt.target.tagName.toLowerCase() === 'input') {
      this.next();
    }
  }

  animationDone(evt) {
    if (this.cursor === this.funnelLength - 1 ) {
      this.container.nativeElement.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
    if (this.stepQuestion) {
      setTimeout( () => {
        this.stepQuestion.nativeElement.focus();
      });
    }
  }

  back(evt): void {
    evt.stopPropagation();
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
    const isAdditionalInfo = /additional_info_/i.test(name);

    if (isAdditionalInfo) {
      if (!this.ubFields.additional_info ) {
        this.ubFields.additional_info = '';
        this.createHiddenFields('additional_info');
      }
      this.ubFields[name] = name;
      return;
    }

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
      this.ubFields[fieldName] = el;
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
    this.landingUrl = window ? window.location.href : '';
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
    if (this.cursor === this.funnelLength - 1 ) {
      return;
    } else if (this.cursor === this.funnelLength - 2 ) {
      setTimeout(() => this.processNextStep());
    } else {
      setTimeout(() => this.processNextStep(), 100);
    }
    /* setTimeout( () => {
      const prevStepVal = this.formGroup.get(this.funnel[this.cursor].name).value;
      const prevStepName = this.funnel[this.cursor].name;
      if (prevStepName === 'additional_info') {
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
    }, 100); */
  }

  processNextStep() {
    const prevStepVal = this.formGroup.get(this.funnel[this.cursor].name).value;
      const prevStepName = this.funnel[this.cursor].name;
      if (prevStepName === 'additional_info') {
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
  }

  onSubmit() {
    if (this.formGroup.valid) {
      try {
        this.submittingForm = true;
        this.setUnbounceForm();
        this.mixpanelService.submit(this.formGroup.get(this.funnel[this.funnelLength - 1].name).value);
        this.progressBarValue = 100;
        lp.jQuery(this.ubForm).submit();
      } catch (e) {
        this.submittingForm = false;
        console.log('Error: Form not submitted.', e);
      }

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
          if (step.fields[i].name === 'phone_country') {
            continue;
          } else if (step.fields[i].name === 'phone_number') {
            nestedControls['phone_number'] = this.fb.group({
              countryControl: ['', Validators.required],
              phoneNumberControl: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
              hiddenPhoneNumberControl: ''
            });
          } else {
             nestedControls[step.fields[i].name] = [ '', { validators: Validators[step.fields[i].validators], updateOn: 'blur'} ];
          }
        }
        nestedControls['tos_signoff'] = ['', Validators.requiredTrue ];
        controls[step.name] = this.fb.group(nestedControls);
      } else {
        controls[step.name] = [ '', Validators[step.validators] ];
      }
    });
    this.formGroup = this.fb.group(controls);

    // Set custom validation for the email field
    this.formGroup.get('personal_information.email')
      .setValidators(Validators.compose([Validators.required, this.emailValidator.validate()]));
  }

  setUnbounceFields() {
    this.funnel.forEach(step => {
      this.createHiddenFields(step.name, step.fields);
    });
    this.createHiddenFields('jlp', null, this.landingUrl);
    this.createHiddenFields('intl_phone', null);
    // if (localStorage.getItem('jlp')) { this.createHiddenFields('jlp', null, localStorage.getItem('jlp')); }
  }

  setUnbounceForm() {
    if (!this.ubForm) { return; }
    const separator = ', ';
    for (const k in this.ubFields) {
      if (this.ubFields.hasOwnProperty(k)) {
        const field = this.ubFields[k];
        const isAdditionalInfo = /additional_info_/i.test(field);
        const path = (field.dataset && field.dataset.path) ? field.dataset.path + '.' + field.name :
          (field.name ? field.name : field);
        if (path === 'additional_info') {
          continue;
        }
        if (field.name === 'phone_country') {
          /** TODO: CHANGE THE IMPLEMENTATION OF THIS THING */
          const countryPath = path.replace('.phone_country', '.phone_number.countryControl');
          field.value = this.formGroup.get(countryPath).value.iso2;
          continue;
        }
        if (this.formGroup.get(path)) {
          if (isAdditionalInfo) {
            this.ubFields.additional_info.value +=
              `${separator}${field.replace('additional_info_', '')}: "${this.formGroup.get(path).value}"`;
          } else if (field.name === 'phone_number') {
            field.value = this.formGroup.get(path + '.phoneNumberControl').value;
            this.ubFields.intl_phone.value = this.formGroup.get(path + '.hiddenPhoneNumberControl').value;
          } else {
            field.value = this.formGroup.get(path).value;
          }
        }
      }
    }
    // Remove leading separator if additional field is present.
    if (this.ubFields.additional_info && this.ubFields.additional_info.value.indexOf(separator) === 0) {
      this.ubFields.additional_info.value = this.ubFields.additional_info.value.replace(separator, '');
    }
  }

  updateUrl(): void {
    this.location.replaceState(this.location.path().replace(/step=[^&]+/, 'step=' + (this.cursor + 1)));
  }
/*
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  } */
}
