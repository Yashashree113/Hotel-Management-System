import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerPayComponent } from './owner-pay.component';

describe('OwnerPayComponent', () => {
  let component: OwnerPayComponent;
  let fixture: ComponentFixture<OwnerPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
