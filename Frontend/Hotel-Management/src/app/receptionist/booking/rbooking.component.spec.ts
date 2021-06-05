import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RBookingComponent } from './rbooking.component';

describe('RBookingComponent', () => {
  let component: RBookingComponent;
  let fixture: ComponentFixture<RBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
