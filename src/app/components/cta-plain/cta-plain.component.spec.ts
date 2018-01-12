import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaPlainComponent } from './cta-plain.component';

describe('CtaPlainComponent', () => {
  let component: CtaPlainComponent;
  let fixture: ComponentFixture<CtaPlainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaPlainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaPlainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
