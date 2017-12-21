import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger, state } from '@angular/animations';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Strings } from '../../models/strings';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-click-funnel',
  templateUrl: './click-funnel.component.html',
  styleUrls: ['./click-funnel.component.css'],
  providers: [
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

/*
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true }),

        query(':enter', stagger('0ms', [
          animate('.4s ease-in', keyframes([
            style({opacity: 0,   transform: 'translateX(75%)',   offset: 0}),
            style({opacity: .4,   transform: 'translateX(-10px)',   offset: 0.4}),
            style({opacity: 1 ,   transform: 'translateX(0)',    offset: 1.0})
        ]))]), {optional: true}),

        query(':leave', stagger('0ms',
          animate('.4s ease-out', keyframes([
            style({opacity: 1,  transform: 'translateX(0)',  offset: 0}),
            style({opacity: .4,  transform: 'translateX(10px)',  offset: 0.4}),
            style({opacity: 0,  transform: 'translateX(-75%)',  offset: 1.0})
        ]))), {optional: true})

        query(':enter',
          animate('.4s ease-in', keyframes([
            style({opacity: 0,   transform: 'translateX(75%)',   offset: 0}),
            style({opacity: .4,   transform: 'translateX(-10px)',   offset: 0.4}),
            style({opacity: 1 ,   transform: 'translateX(0)',    offset: 1.0})
        ])), {optional: true}),

        query(':leave',
          animate('.4s ease-out', keyframes([
            style({opacity: 1,  transform: 'translateX(0)',  offset: 0}),
            style({opacity: .4,  transform: 'translateX(10px)',  offset: 0.4}),
            style({opacity: 0,  transform: 'translateX(-75%)',  offset: 1.0})
        ])), {optional: true})



      ])
    ])
  ]
})
*/

export class ClickFunnelComponent implements OnInit, AfterViewInit {

  funnel: any[] = Strings.funnel;
  funnelLength = this.funnel.length;
  checked;
  // step: any = {};
  cursor: number;
  progressBarValue = 0;
  clickEvent$: Observable<MouseEvent>;
  formGroup: FormGroup;
  animationDirection = 'forwards';

  @ViewChild('wrapper')
  wrapper: ElementRef;

  constructor(private fb: FormBuilder, private location: Location ) { }

  ngOnInit() {
    this.cursor = 0;
    this.checked = new Array(this.funnelLength);
    // Object.assign(this.step, this.funnel[this.cursor]);
    this.setForm();
    this.initUrl();
  }

  ngAfterViewInit() {
    this.clickEvent$ = Observable.fromEvent( this.wrapper.nativeElement, 'click');
    this.clickEvent$.filter(evt => evt.srcElement.tagName.toLowerCase() === 'input' ).subscribe(evt => {
      this.next();
    });
  }

  back(): void {
    if ( this.cursor === 0 ) { return; }
    this.cursor--;
    this.animationDirection = 'backwards';
    this.updateUrl();
    this.progressBarValue = Math.round((100 * this.cursor) / this.funnelLength );
  }

  initUrl() {
    let url = this.location.path();
    const hasParams = /\?/.test( url );
    if ( hasParams && /step=/.test(url) ) {
      url = url.replace(/step=[^&]+/, 'step=1');
    } else if (hasParams) {
      url += '&step=1';
    } else {
      url += '?step=1';
    }
    this.location.replaceState(url);
  }

  next() {
    if (this.cursor === this.funnelLength - 1 ) { return; }
    setTimeout( () => {
      this.animationDirection = 'forwards';
      this.cursor++;
      this.updateUrl();
      this.progressBarValue = Math.round((100 * this.cursor) / this.funnelLength );
    }, 100 );
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log('YEP!! ALL GOOD!');
      console.log(JSON.stringify(this.formGroup.value, null, 2));
      this.progressBarValue = 100;
    } else {
      console.log('Something is wrong with your form, bro...');
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
        nestedControls['tos'] = ['', Validators.requiredTrue ];
        controls[step.name] = this.fb.group(nestedControls);
      } else {
        controls[step.name] = [ '', Validators[step.validators] ];
      }
    });
    this.formGroup = this.fb.group(controls);
  }

  updateUrl(): void {
    this.location.replaceState(this.location.path().replace(/step=[^&]+/, 'step=' + (this.cursor + 1)));
  }
}
