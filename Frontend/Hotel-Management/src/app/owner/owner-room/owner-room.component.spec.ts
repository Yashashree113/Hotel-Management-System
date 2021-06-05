import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerRoomComponent } from './owner-room.component';

describe('OwnerRoomComponent', () => {
  let component: OwnerRoomComponent;
  let fixture: ComponentFixture<OwnerRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
