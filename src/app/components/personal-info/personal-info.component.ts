import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  @Input()
  childGroup: FormGroup;
  @Input()
  fields: any;
  @Input()
  tosContent: string;

  lastEmailValue: string;

  constructor() { }

  ngOnInit() {
  }

  displayErrorMessage(field: any): string | null {
  return ( this.childGroup.get(field.name).errors && this.childGroup.get(field.name).errors.message ) ||
      field.error_message ||
      'This field is required';
  }

  revalidateEmail(evt) {
    const value = evt.target.value;
    if (!this.lastEmailValue) {
      this.lastEmailValue = value;
    } else if (this.lastEmailValue === value) {
      this.childGroup.get('email').updateValueAndValidity();
    }
    this.lastEmailValue = value;
  }
}
