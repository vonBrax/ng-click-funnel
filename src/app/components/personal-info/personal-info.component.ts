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

  constructor() { }

  ngOnInit() {
  }

}
