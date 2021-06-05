import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MStaffComponent } from './m-staff.component';

describe('MStaffComponent', () => {
  let component: MStaffComponent;
  let fixture: ComponentFixture<MStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
