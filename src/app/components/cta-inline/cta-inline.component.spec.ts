import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaInlineComponent } from './cta-inline.component';

describe('CtaInlineComponent', () => {
  let component: CtaInlineComponent;
  let fixture: ComponentFixture<CtaInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
