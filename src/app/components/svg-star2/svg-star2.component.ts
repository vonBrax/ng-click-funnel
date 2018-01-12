import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-svg-star2',
  templateUrl: './svg-star2.component.html',
  styleUrls: ['./svg-star2.component.css']
})
export class SvgStar2Component implements OnInit {

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
