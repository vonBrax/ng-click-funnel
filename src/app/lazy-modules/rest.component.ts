import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-rest',
  template: `
    <app-patient-stories></app-patient-stories>
    <app-review-stats></app-review-stats>
    <app-package-deals></app-package-deals>
    <!-- <app-what-is-ht></app-what-is-ht> -->
    <app-cta-inline></app-cta-inline>
    <app-reviews></app-reviews>
    <app-cta-with-image></app-cta-with-image>
    <app-accreditations></app-accreditations>
    <app-cta-plain></app-cta-plain>
    <app-disclaimer></app-disclaimer>
    <app-footer></app-footer>
  `
})
export class RestComponent implements AfterViewInit {

  constructor (private cd: ChangeDetectorRef) { }

  ngAfterViewInit() {
    // this.cd.detach();
  }
 }
