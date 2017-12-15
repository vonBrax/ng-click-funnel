import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioClickComponent } from './radio-click.component';

describe('RadioClickComponent', () => {
  let component: RadioClickComponent;
  let fixture: ComponentFixture<RadioClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
