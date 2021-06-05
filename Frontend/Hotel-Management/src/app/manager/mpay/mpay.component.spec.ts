import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpayComponent } from './mpay.component';

describe('MpayComponent', () => {
  let component: MpayComponent;
  let fixture: ComponentFixture<MpayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
