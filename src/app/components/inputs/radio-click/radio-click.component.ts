import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Output()
  removeAnswersEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  numberToChar(i) {
    return String.fromCharCode(65 + i);
  }
  removeAnswers() {
    this.removeAnswersEvent.emit();
  }

}