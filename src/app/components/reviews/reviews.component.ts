import { Component, OnInit } from '@angular/core';
import { Strings } from '../../models/strings';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  strings: any;

  constructor() { }

  ngOnInit() {
    this.strings = Strings.reviews;
  }

}
