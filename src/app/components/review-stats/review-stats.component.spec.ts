import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewStatsComponent } from './review-stats.component';

describe('ReviewStatsComponent', () => {
  let component: ReviewStatsComponent;
  let fixture: ComponentFixture<ReviewStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
