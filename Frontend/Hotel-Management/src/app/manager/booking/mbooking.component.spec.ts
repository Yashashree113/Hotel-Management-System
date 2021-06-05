import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MBookingComponent } from './mbooking.component';

describe('MBookingComponent', () => {
  let component: MBookingComponent;
  let fixture: ComponentFixture<MBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
