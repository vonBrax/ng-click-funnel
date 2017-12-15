import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickFunnelComponent } from './click-funnel.component';

describe('ClickFunnelComponent', () => {
  let component: ClickFunnelComponent;
  let fixture: ComponentFixture<ClickFunnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickFunnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickFunnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
