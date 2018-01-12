import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgQuoteComponent } from './svg-quote.component';

describe('SvgQuoteComponent', () => {
  let component: SvgQuoteComponent;
  let fixture: ComponentFixture<SvgQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
