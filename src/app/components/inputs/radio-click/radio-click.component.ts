import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
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
  icon: string;
  @Input()
  index: number;
  @Input()
  formGroup: FormGroup;
  @Input()
  controlName: string;
  @ViewChild('labelEl')
  labelEl: ElementRef;

  constructor() { }

  ngOnInit() { }

  onKeydown(evt) {
    const VK_SPACE = 32;
    const VK_ENTER = 13;
    const key = evt.keyCode;
    if (key === VK_SPACE || key === VK_ENTER) {
      this.labelEl.nativeElement.click();
    }
  }
/*
  numberToChar(i) {
    return String.fromCharCode(65 + i);
  } */
}
