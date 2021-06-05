import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MRoomComponent } from './m-room.component';

describe('MRoomComponent', () => {
  let component: MRoomComponent;
  let fixture: ComponentFixture<MRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
