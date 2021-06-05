import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RStaffComponent } from './r-staff.component';

describe('StaffComponent', () => {
  let component: RStaffComponent;
  let fixture: ComponentFixture<RStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
