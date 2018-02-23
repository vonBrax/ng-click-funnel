import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-entry',
  template: `
  <app-header></app-header>
  <app-hero-banner></app-hero-banner>
  <app-how-it-works class="hide--phone"></app-how-it-works>
  <app-contact-us class="show--phone"></app-contact-us>
  <!-- <div id="lazyModule" [lazySrc]="'rest'"></div> -->
  `
})
export class EntryComponent implements OnInit, OnChanges {
  constructor() { }
  ngOnInit() { }

  ngOnChanges() {
    console.log('Entry component changed!');
  }
}
