import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientStoriesComponent } from './patient-stories.component';

describe('PatientStoriesComponent', () => {
  let component: PatientStoriesComponent;
  let fixture: ComponentFixture<PatientStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
