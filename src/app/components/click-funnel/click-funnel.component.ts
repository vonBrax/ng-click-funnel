import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { Strings } from '../../models/strings';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-click-funnel',
  templateUrl: './click-funnel.component.html',
  styleUrls: ['./click-funnel.component.css'],
  animations: [
    trigger('answersAnimation', [
      transition('* => *', [

        query(':enter', style({opacity: 0}), {optional: true }),

        query(':enter', stagger('30ms', [
          animate('.5s ease-in', keyframes([
            style({opacity: 0,   transform: 'translateX(75%)',   offset: 0}),
            style({opacity: .4,   transform: 'translateX(-10px)',   offset: 0.4}),
            style({opacity: 1 ,   transform: 'translateX(0)',    offset: 1.0})
        ]))]), {optional: true}),

        query(':leave', stagger('30ms',
          animate('.5s ease-out', keyframes([
            style({opacity: 1,  transform: 'translateX(0)',  offset: 0}),
            style({opacity: .4,  transform: 'translateX(10px)',  offset: 0.4}),
            style({opacity: 0,  transform: 'translateX(-75%)',  offset: 1.0})
        ]))), {optional: true})
      ])
    ])
  ]
})
export class ClickFunnelComponent implements OnInit, AfterViewInit {

  // goals = ['First', 'Second', 'Third'];
  funnel: any[] = Strings.funnel;
  funnelLength = this.funnel.length;
  step: any = {};
  cursor: number;
  // answers: string[];
  progressBarValue = 0;
  clickEvent$: Observable<MouseEvent>;

  @ViewChild('wrapper')
  wrapper: ElementRef;

  constructor() { }

  ngOnInit() {
    // this.answers = this.funnel[this.cursor].answers;
    this.cursor = 0;
    Object.assign(this.step, this.funnel[this.cursor]);
    console.log(this.funnel);
  }

  ngAfterViewInit() {
    this.clickEvent$ = Observable.fromEvent( this.wrapper.nativeElement, 'click');
    this.clickEvent$.filter(evt => evt.srcElement.tagName === 'INPUT' ).subscribe(evt => {
      this.next();
    });
  }
/*
  removeAnswers(i) {
    const j = 0;
    // this.step = null;
    // this.step = this.funnel[++this.cursor];
    // this.progressBarValue = Math.round( (100 * this.cursor) / (this.funnelLength) );
    // this.answers = [];
  } */

  back(): void {
    if ( this.cursor === 0 ) { return; }
    this.step.answers = [];
    setTimeout( () => {
      Object.assign(this.step, this.funnel[--this.cursor]);
      console.log(this.step);
      this.progressBarValue = Math.round((100 * this.cursor) / this.funnelLength );
    }, 300);
  }

  /* goForward(event: MouseEvent ): void {
    if (this.cursor === this.funnelLength - 1 ) { return; }
    this.step.answers = [];
    setTimeout( () => {
      this.step = this.funnel[++this.cursor];
      this.progressBarValue = Math.round( (100 * this.cursor) / (this.funnelLength) );
    }, 200);
  } */

  next() {
    if (this.cursor === this.funnelLength - 1 ) { return; }
    this.step.answers = [];
    console.log(this.funnel);
    setTimeout( () => {
      Object.assign(this.step, this.funnel[++this.cursor]);
      this.progressBarValue = Math.round((100 * this.cursor) / this.funnelLength );
    }, 300);
  }
}
