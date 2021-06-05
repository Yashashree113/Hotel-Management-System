import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import{HttpClientModule} from'@angular/common/http';
import { AppComponent } from './app.component';
import { MGuestComponent } from './manager/m-guest/m-guest.component';
import { MRoomComponent } from './manager/m-room/m-room.component';
import { MStaffComponent } from './manager/m-staff/m-staff.component';
import { ManagerLoginComponent } from './manager/manager-login/manager-login.component';
import { OwnerGuestComponent } from './owner/owner-guest/owner-guest.component';
import { OwnerRoomComponent } from './owner/owner-room/owner-room.component';
import { OwnerStaffComponent } from './owner/owner-staff/owner-staff.component';
import { AdminLoginComponent } from './owner/admin-login/admin-login.component';
import { RGuestComponent } from './receptionist/r-guest/r-guest.component';
import { RRoomComponent } from './receptionist/r-room/r-room.component';
import { RStaffComponent } from './receptionist/r-staff/r-staff.component';
import { ReceptionistLoginComponent } from './receptionist/receptionist-login/receptionist-login.component';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MBookingComponent } from './manager/booking/mbooking.component';
import { OBookingComponent } from './owner/booking/obooking.component';
import { RBookingComponent } from './receptionist/booking/rbooking.component';
import { MpayComponent } from './manager/mpay/mpay.component';
import { OwnerPayComponent } from './owner/owner-pay/owner-pay.component';
import { RPayComponent } from './receptionist/r-pay/r-pay.component';
import { PaymentComponent } from './receptionist/payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    MGuestComponent,
    MRoomComponent,
    MStaffComponent,
    ManagerLoginComponent,
    OwnerGuestComponent,
    OwnerRoomComponent,
    OwnerStaffComponent,
    AdminLoginComponent,
    RGuestComponent,
    RRoomComponent,
    RStaffComponent,
    ReceptionistLoginComponent,
    HomeComponent,
    SideNavComponent,
    OBookingComponent,
    MBookingComponent,
    RBookingComponent,
    MpayComponent,
    OwnerPayComponent,
    RPayComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        //path:'auth/login',
        //component:LoginComponent
      },
      {
        path:'',
        component:HomeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
