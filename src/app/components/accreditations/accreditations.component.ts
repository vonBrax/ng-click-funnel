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
    this.addAltStrings(this.strings);
  }

  addAltStrings(strings: any): void {

    if (this.strings.logo_urls) {
      for (let i = 0; i < this.strings.logo_urls.length; i++) {
        const str = this.strings.logo_urls[i];
        const fileName = (typeof str.lastIndexOf === 'function') ? str.slice(str.lastIndexOf('/') + 1 ) : '';
        let alt = '';

        if (/temos/i.test(fileName)) {
          alt = 'Temos International - Logo';
        } else if (/imtj/i.test(fileName)) {
          alt = 'International Medical Travel Awards 2017 Winner';
        }

        this.strings.logo_urls[i] = {url: str, alt: alt};
      }
    }

    if (this.strings.press.logo_urls) {
      for (let i = 0; i < this.strings.press.logo_urls.length; i++) {
        const str = this.strings.press.logo_urls[i];
        const fileName = (typeof str.lastIndexOf === 'function') ? str.slice(str.lastIndexOf('/') + 1 ) : '';
        let alt = '';

        if (/$fas/i.test(fileName)) {
          alt = 'Frankfurter Allgemeine - Logo';
        } else if (/$forbes/i.test(fileName)) {
          alt = 'Forbes Austria - Logo';
        } else if (/$futurezone/i.test(fileName)) {
          alt = 'Future Zone - Logo';
        } else if (/$startupvalley/i.test(fileName)) {
          alt = 'Startup Valley - Logo';
        }
        this.strings.press.logo_urls[i] = {url: str, alt: alt};
      }
    }
  }
}
