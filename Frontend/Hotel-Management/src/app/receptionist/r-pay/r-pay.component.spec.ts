import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RPayComponent } from './r-pay.component';

describe('RPayComponent', () => {
  let component: RPayComponent;
  let fixture: ComponentFixture<RPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
