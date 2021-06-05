import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MRoomComponent } from './manager/m-room/m-room.component';
import { MStaffComponent } from './manager/m-staff/m-staff.component';
import { ManagerLoginComponent } from './manager/manager-login/manager-login.component';
import { ManagerComponent } from './manager/manager.component';
import { AdminLoginComponent } from './owner/admin-login/admin-login.component';
import { OBookingComponent } from './owner/booking/obooking.component';
import {MBookingComponent} from './manager/booking/mbooking.component';
import { OwnerRoomComponent } from './owner/owner-room/owner-room.component';
import { OwnerStaffComponent } from './owner/owner-staff/owner-staff.component';
import { OwnerComponent } from './owner/Owner.component';
import { RRoomComponent } from './receptionist/r-room/r-room.component';
import { ReceptionistLoginComponent } from './receptionist/receptionist-login/receptionist-login.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { RBookingComponent } from './receptionist/booking/rbooking.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {
    path: 'owner',
    component: OwnerComponent,
    children: [
      {
        path: 'booking',
        component: OBookingComponent
      },
      {
        path: 'staff',
        component: OwnerStaffComponent
      },
      {
        path: 'room',
        component: OwnerRoomComponent
      },
      {
        path: '', redirectTo:'owner', pathMatch:'full',
        component: AdminLoginComponent
      }
    ]
  },
  {
    path: 'manager',
    component: ManagerComponent,
    children: [
      {
        path:'', redirectTo:'manager', pathMatch:'full',
        component: ManagerLoginComponent
      },
      {
        path: 'm-room',
        component: MRoomComponent
      },
      {
        path: 'booking',
        component: MBookingComponent
      },
      {
        path: 'm-staff',
        component: MStaffComponent
      }
    ]
  },
  {
    path: 'receptionist',
    component: ReceptionistComponent,
    children: [
      {
        path: '', redirectTo:'receptionist', pathMatch:'full',
        component: ReceptionistLoginComponent
      },
      {
        path: 'r-room',
        component: RRoomComponent
      },
      {
        path: 'booking',
        component: RBookingComponent
      }
    ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
