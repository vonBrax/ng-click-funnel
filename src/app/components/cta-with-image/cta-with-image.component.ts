import { Component, OnInit } from '@angular/core';
import { Strings } from '../../models/strings';

@Component({
  selector: 'app-cta-with-image',
  templateUrl: './cta-with-image.component.html',
  styleUrls: ['./cta-with-image.component.css']
})
export class CtaWithImageComponent implements OnInit {

  strings: any;

  constructor() { }

  ngOnInit() {
    this.strings = Strings.cta_with_image;
  }

}
