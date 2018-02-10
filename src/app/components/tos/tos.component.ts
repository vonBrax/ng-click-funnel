import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tos',
  templateUrl: './tos.component.html',
  styleUrls: ['./tos.component.css']
})
export class TosComponent implements OnInit {

  @Input()
  description: string;
  @Input()
  formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
