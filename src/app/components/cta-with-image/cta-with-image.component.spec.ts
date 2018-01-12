import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaWithImageComponent } from './cta-with-image.component';

describe('CtaWithImageComponent', () => {
  let component: CtaWithImageComponent;
  let fixture: ComponentFixture<CtaWithImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaWithImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaWithImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
