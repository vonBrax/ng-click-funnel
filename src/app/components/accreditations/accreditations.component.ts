import { Component, OnInit } from '@angular/core';
import { Strings } from '../../models/strings';

@Component({
  selector: 'app-accreditations',
  templateUrl: './accreditations.component.html',
  styleUrls: ['./accreditations.component.css']
})
export class AccreditationsComponent implements OnInit {

  strings: any;

  constructor() { }

  ngOnInit() {
    this.strings = Strings.accreditations;
  }

}
