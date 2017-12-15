import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneSelectorComponent } from './phone-selector.component';

describe('PhoneSelectorComponent', () => {
  let component: PhoneSelectorComponent;
  let fixture: ComponentFixture<PhoneSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
