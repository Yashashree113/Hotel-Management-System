import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerComponent } from './Owner.component';
import { OwnerRoomComponent } from './owner-room/owner-room.component';
import { OwnerStaffComponent } from './owner-staff/owner-staff.component';
import { OBookingComponent } from './booking/obooking.component';
import { RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input'

@NgModule({
  declarations: [
    OwnerComponent,
    OwnerRoomComponent,
    OwnerStaffComponent,
    OBookingComponent,
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatInputModule 
  ]
})
export class OwnerModule { }