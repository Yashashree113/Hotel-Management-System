import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RRoomComponent } from './r-room.component';

describe('RRoomComponent', () => {
  let component: RRoomComponent;
  let fixture: ComponentFixture<RRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
