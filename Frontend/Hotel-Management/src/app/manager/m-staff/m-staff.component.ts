import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-m-staff',
  templateUrl: './m-staff.component.html',
  styleUrls: ['./m-staff.component.css']
})
export class MStaffComponent implements OnInit {

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

  changePresentTab(x:any){
    this.PresentTab = x
  }

  editStaff(someID:any){
    console.log(someID)
    this.httpc.get<any>(`http://localhost:8081/staffs/staff/${someID}`).subscribe((x) => {
      this.PresentStaff = x
      console.log(this.PresentStaff)
      this.editForm.setValue({
        'occupation': this.PresentStaff.occupation,
        'email': this.PresentStaff.email,
        'salary': this.PresentStaff.salary,
        'age': this.PresentStaff.age,
        'employeeaddress': this.PresentStaff.employeeaddress
      })
      this.PresentTab = 2
    })
    
  }

  save(){
    let obj = {
      'occupation': this.editForm.get('occupation')?.value,
      'email': this.editForm.get('email')?.value,
      'salary': this.editForm.get('salary')?.value,
      'age': this.editForm.get('age')?.value,
      'employeeaddress': this.editForm.get('employeeaddress')?.value,
    }
    this.httpc.put<any>(`http://localhost:8081/staffs/staff/${this.PresentStaff._id}`,obj).subscribe((x) => {
      console.log(x)
      switch(x.message){
        case 'Staff updated': {
          this.allStaff = []
          let response:any[]=[]
          this.httpc.get<Object>('http://localhost:8081/staffs/staff').subscribe(
            (res) => {
                  console.log(res)
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
                  this.PresentTab = 0
              })
          break;
        }
        case 'Staff not updated': {
          alert('Staff did not get updated')
        }
      }
    })
  }
  deleteStaff(someID: any){
    // console.log(`http://localhost:3001/room/${someID}`)
    this.httpc.delete<any>(`http://localhost:8081/staffs/staff/${someID}`).subscribe((x) =>{
      switch(x?.message){
        case 'Staff Deleted': {
          this.allStaff = []
              let response:any[]=[]
              this.httpc.get<Object>('http://localhost:8081/staffs/staff').subscribe(
                (res) => {
                      console.log(res)
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
                      this.PresentTab = 0
                  })
              break;
        }
        case 'Staff Cannot be deleted':{
          alert('Staff cannot be deleted')
          break;
        }
      }
    })
  }
  addStaff(){
    const obj = {
      'Code': this.staffForm.get('Code')?.value,
      'employeename': this.staffForm.get('employeename')?.value,
      'occupation': this.staffForm.get('occupation')?.value,
      'email': this.staffForm.get('email')?.value,
      'salary': this.staffForm.get('salary')?.value,
      'age': this.staffForm.get('age')?.value,
      'employeeaddress': this.staffForm.get('employeeaddress')?.value,
    }
    console.log(obj)
    this.httpc.post<any>('http://localhost:8081/staffs/staff/',obj).subscribe((x) => {
      switch(x.message){
        case 'Staff Created': {
              this.allStaff = []
              let response:any[]=[]
              this.httpc.get<Object>('http://localhost:8081/staffs/staff').subscribe(
                (res) => {
                      console.log(res)
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
                      this.PresentTab = 0
                  })
              break;
        }
        case 'Staff Not Created': {
          alert('Staff not created')
        }
      }
    })
  }
}