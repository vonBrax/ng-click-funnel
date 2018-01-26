import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio-click',
  templateUrl: './radio-click.component.html',
  styleUrls: ['./radio-click.component.css']
})
export class RadioClickComponent implements OnInit {

  @Input()
  answer: string;
  @Input()
  index: number;
  @Input()
  formGroup: FormGroup;
  @Input()
  controlName: string;

  constructor() { }

  ngOnInit() { }
/*
  numberToChar(i) {
    return String.fromCharCode(65 + i);
  } */
}
