import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgAngleRightCircleComponent } from './svg-angle-right-circle.component';

describe('SvgAngleRightCircleComponent', () => {
  let component: SvgAngleRightCircleComponent;
  let fixture: ComponentFixture<SvgAngleRightCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgAngleRightCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgAngleRightCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
