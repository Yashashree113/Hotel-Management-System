import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-owner-staff',
  templateUrl: './owner-staff.component.html',
  styleUrls: ['./owner-staff.component.css']
})
export class OwnerStaffComponent implements OnInit {

  PresentTab:any = 0
  PresentStaff:any = 0
  signupForm = new FormGroup({
    sgEmail: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[a-z]{2,4}$')]),
    sgPwd: new FormControl('',Validators.required)
  })
  loginForm = new FormGroup({
    loginEmail: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[a-z]{2,4}$')]),
    loginPwd: new FormControl('',Validators.required)
  })
  staffForm = new FormGroup({
    Code:new FormControl('',Validators.required),
    employeename: new FormControl('', Validators.required),
    occupation: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    salary: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),
    employeeaddress: new FormControl('',Validators.required)
  })
  editForm = new FormGroup({
    occupation: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    salary: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),
    employeeaddress: new FormControl('',Validators.required)
  })
  allStaff:Array<any>=[];
  constructor(private httpc: HttpClient) { 
   
  }


  ngOnInit(): void {

    console.log("hello")
    let response:any[]=[]
    this.httpc.get<Object>('http://localhost:8081/staffs/staff').subscribe(
      (res) => {
            console.log(res)
            // console.log(this.allRooms)
            response.push(res)
           
            let recs:any[]=response[0]
            for (let i=0;i<recs.length;i++){
              this.allStaff.push({
                Code:response[0][i].Code,
                employeename: response[0][i].employeename,
                occupation: response[0][i].occupation,
                email: response[0][i].email,
                salary: response[0][i].salary,    
                age: response[0][i].age,
                employeeaddress: response[0][i].employeeaddress,
                updatedOn:response[0][i].updatedOn,
                id: response[0][i]._id
               });   
            }
            console.log("hey",response)
        })

        
  }
}