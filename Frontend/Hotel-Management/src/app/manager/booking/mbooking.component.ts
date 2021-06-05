import { Component, OnInit } from '@angular/core';
import { Booking } from './mbooking.model';
import { UserService } from '../services/user.service';
import {mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-booking',
  templateUrl: './mbooking.component.html',
  styleUrls: ['./mbooking.component.css']
})
export class MBookingComponent implements OnInit {

  public loading= true;
  public errorMsg : String;
  public successMsg : String;
  public booking:Booking[];
  

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getBooking().subscribe((booking:Booking[])=>{
      this.booking=booking;
      this.loading=false;
    }, (error:ErrorEvent)=>{
      this.errorMsg= error.error.message;
      this.loading=false;
    })
  }
  deleteBooking(id:number){
    this.userService.deleteBooking(id).pipe(mergeMap(()=>this.userService.getBooking())
    )
    .subscribe((booking:Booking[])=>{
      this.booking=booking;
      this.successMsg='Successfully canceled'
    },
    (error:ErrorEvent)=>{
      this.errorMsg=error.error.message;
    });
  }
}
