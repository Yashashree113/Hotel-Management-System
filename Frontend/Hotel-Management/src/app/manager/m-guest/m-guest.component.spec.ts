import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MGuestComponent } from './m-guest.component';

describe('MGuestComponent', () => {
  let component: MGuestComponent;
  let fixture: ComponentFixture<MGuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MGuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
