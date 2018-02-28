import { Component } from '@angular/core';

@Component({
  selector: 'app-entry',
  template: `
  <app-header></app-header>
  <app-hero-banner></app-hero-banner>
  <app-patient-stories></app-patient-stories>
  <app-footer></app-footer>
  `
})
export class EntryComponent {
  constructor() { }
}
