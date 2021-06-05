import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerGuestComponent } from './owner-guest.component';

describe('OwnerGuestComponent', () => {
  let component: OwnerGuestComponent;
  let fixture: ComponentFixture<OwnerGuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerGuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});