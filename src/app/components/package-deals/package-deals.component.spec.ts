import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageDealsComponent } from './package-deals.component';

describe('PackageDealsComponent', () => {
  let component: PackageDealsComponent;
  let fixture: ComponentFixture<PackageDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
