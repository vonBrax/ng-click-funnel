import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgStar2Component } from './svg-star2.component';

describe('SvgStar2Component', () => {
  let component: SvgStar2Component;
  let fixture: ComponentFixture<SvgStar2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgStar2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgStar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
