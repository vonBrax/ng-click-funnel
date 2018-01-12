import { Component, OnInit } from '@angular/core';
import { Strings } from '../../models/strings';

@Component({
  selector: 'app-cta-inline',
  templateUrl: './cta-inline.component.html',
  styleUrls: ['./cta-inline.component.css']
})
export class CtaInlineComponent implements OnInit {

  strings: any;

  constructor() { }

  ngOnInit() {
    this.strings = Strings.cta_inline;
  }

}
