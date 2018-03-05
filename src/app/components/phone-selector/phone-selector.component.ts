import { Component, OnInit } from '@angular/core';
import { CountryList } from '../../data/phone-selector.data';

@Component({
  selector: 'app-phone-selector',
  templateUrl: './phone-selector.component.html',
  styleUrls: ['./phone-selector.component.css']
})
export class PhoneSelectorComponent implements OnInit {
  isActive = false;
  countryList: any[];
  constructor() { }

  ngOnInit() {
    this.countryList = CountryList;
  }
}
