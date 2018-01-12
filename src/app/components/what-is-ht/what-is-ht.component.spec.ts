import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsHtComponent } from './what-is-ht.component';

describe('WhatIsHtComponent', () => {
  let component: WhatIsHtComponent;
  let fixture: ComponentFixture<WhatIsHtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIsHtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsHtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
