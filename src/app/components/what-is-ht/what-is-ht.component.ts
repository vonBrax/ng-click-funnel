import { Component, OnInit } from '@angular/core';
import { Strings } from '../../models/strings';

@Component({
  selector: 'app-what-is-ht',
  templateUrl: './what-is-ht.component.html',
  styleUrls: ['./what-is-ht.component.css']
})
export class WhatIsHtComponent implements OnInit {

  strings: any;

  constructor() { }

  ngOnInit() {
    this.strings = Strings.what_is_ht;
  }

}
