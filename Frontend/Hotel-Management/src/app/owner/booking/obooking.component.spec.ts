import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OBookingComponent } from './obooking.component';

describe('OBookingComponent', () => {
  let component: OBookingComponent;
  let fixture: ComponentFixture<OBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
