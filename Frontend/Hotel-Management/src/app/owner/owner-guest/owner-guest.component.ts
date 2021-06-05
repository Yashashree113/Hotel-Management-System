import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BookingRes } from '../models/Respones.model';
import { MatSort } from '@angular/material/sort';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-owner-guest',
  templateUrl: './owner-guest.component.html',
  styleUrls: ['./owner-guest.component.css']
})
export class OwnerGuestComponent implements OnInit {

  @ViewChild(MatSort, { static: true }) sort: MatSort
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator

  displayedColumns: string[] = ['code', 'guest_name', 'phone_no', 'email','age','gender', 'company','address',
  'room','adult', 'children','check-in','check-out', 'admin_check'];
  dataSource = new MatTableDataSource<BookingRes>();
  textSearch: any;
  checklist: number[] = []
  indexarray: number = 0
  add: boolean = true

  constructor(private Userservice: UserService) { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
    this.feedata();
  }

  feedata() {
    this.Userservice.getBooking().subscribe(
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
      this.Userservice.putbookingcheck(this.checklist).subscribe(
        data => {
          if (data.status == 'success') {
            alert(data.data)
            window.location.href = 'owner/booking'
          }
          else {
            alert(`Error 404`)
          }
        })
    }
    else {
      alert(`Check the Checklist `)
    }
  }
}