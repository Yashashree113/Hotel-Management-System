import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { GuestRes } from '../model/guestres.response';
import { MatSort } from '@angular/material/sort';
import { MGuestService } from './m-guest.service';
import { Router } from '@angular/router';
import { Guest } from '../model/guest.model';


@Component({
  selector: 'app-m-guest',
  templateUrl: './m-guest.component.html',
  styleUrls: ['./m-guest.component.css']
})
export class MGuestComponent implements OnInit {
  guest:Guest=new Guest();
  submitted=false;

  //@ViewChild(MatSort, { static: true }) sort: MatSort
  //@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator

  /*displayedColumns: string[] = ['code', 'guest_name', 'phone_no', 'email','age','gender', 'company','address',
  'room','adult', 'children','check-in','check-out', 'admin_check'];
  dataSource = new MatTableDataSource<GuestRes>();
  guests:GuestRes[];*/
  /*textSearch: any;
  checklist: number[] = []
  indexarray: number = 0
  add: boolean = true*/

  constructor(private mguestservice: MGuestService, private router:Router) { }

  ngOnInit(): void {
    /*this.dataSource=
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
    this.feedata();*/
  }
  onSubmit(){
    this.submitted=true;
    this.mguestservice.createGuest(this.guest).subscribe(
      data=>console.log(data), error=>console.log(error)
    )
    this.guest=new Guest();
    this.router.navigate(['/guest/guest']);  //check if this is correct
  }
  /*feedata() {
    this.userservice.getBooking().subscribe(
      data => {
        this.dataSource.data = data
      }, error => {

      }
    )
  }

  search(event: Event) {
    let fliterValue = '';
    if (event) {
      fliterValue = (event.target as HTMLInputElement).value;
    }
    console.log(typeof fliterValue);
    this.dataSource.filter = fliterValue.trim().toLowerCase();
  }

  clearSearch() {
    this.textSearch = '';
    this.search(null!);
  }

  oncheck(id: number) {
    this.checklist.forEach((Ifchecklist) => {
      if (Ifchecklist === id) {
        this.checklist.splice(this.indexarray, 1)
        console.log(this.indexarray);
        this.add = false
      }
      else {
        this.indexarray++
      }
    })
    if (this.add == true) {
      this.checklist.push(id)
      this.indexarray = 0
    }
    else {
      this.indexarray = 0
    }
  }

  onclickSubmitcheck() {
    if (this.checklist.length !== 0) {
      this.userservice.putbookingcheck(this.checklist).subscribe(
        data => {
          if (data.status == 'success') {
            alert(data.data)
            window.location.href = '/admin-booking'
          }
          else {
            alert(`Error 404`)
          }
        })
    }
    else {
      alert(`Check the Checklist `)
    }
  }*/
}
