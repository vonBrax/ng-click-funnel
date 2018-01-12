import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-svg-star',
  templateUrl: './svg-star.component.html',
  styleUrls: ['./svg-star.component.css']
})
export class SvgStarComponent implements OnInit {

  @Input()
  starsNumber: number;
  iterations: number[] = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.starsNumber; i++ ) {
      this.iterations.push(i);
    }
  }

}
