import { Component, OnInit } from '@angular/core';
import { Strings } from '../../models/strings';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year: Number = new Date().getFullYear();
  footer: any;

  constructor() { }

  ngOnInit() {
    this.footer = Strings.footer;
  }

}
