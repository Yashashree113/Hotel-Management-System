import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerStaffComponent } from './owner-staff.component';

describe('OwnerStaffComponent', () => {
  let component: OwnerStaffComponent;
  let fixture: ComponentFixture<OwnerStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
