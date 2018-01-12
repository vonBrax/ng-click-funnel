import { Component, OnInit } from '@angular/core';
import { Strings } from '../../models/strings';

@Component({
  selector: 'app-package-deals',
  templateUrl: './package-deals.component.html',
  styleUrls: ['./package-deals.component.css']
})
export class PackageDealsComponent implements OnInit {

  strings: any;

  constructor() { }

  ngOnInit() {
    this.strings = Strings.package_deals;
  }

}
