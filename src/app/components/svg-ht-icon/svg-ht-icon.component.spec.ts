import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgHtIconComponent } from './svg-ht-icon.component';

describe('SvgHtIconComponent', () => {
  let component: SvgHtIconComponent;
  let fixture: ComponentFixture<SvgHtIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgHtIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgHtIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
