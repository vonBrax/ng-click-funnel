import { Component, OnInit } from '@angular/core';
import { Strings } from '../../models/strings';

@Component({
  selector: 'app-cta-plain',
  templateUrl: './cta-plain.component.html',
  styleUrls: ['./cta-plain.component.css']
})
export class CtaPlainComponent implements OnInit {

  strings: any;

  constructor() { }

  ngOnInit() {
    this.strings = Strings.cta_plain;
  }

}
