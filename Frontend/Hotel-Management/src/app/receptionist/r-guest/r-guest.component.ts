import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-r-guest',
  templateUrl: './r-guest.component.html',
  styleUrls: ['./r-guest.component.css']
})
export class RGuestComponent implements OnInit {

  PresentTab:any = 0
  PresentGuest:any = 0
  signupForm = new FormGroup({
    sgEmail: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[a-z]{2,4}$')]),
    sgPwd: new FormControl('',Validators.required)
  })
  loginForm = new FormGroup({
    loginEmail: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[a-z]{2,4}$')]),
    loginPwd: new FormControl('',Validators.required)
  })
  guestForm = new FormGroup({
    code: new FormControl('', Validators.required),
    guest_name: new FormControl('', Validators.required),
    age: new FormControl('',Validators.required),
    gender: new FormControl('',Validators.required),
    phone_no: new FormControl('', Validators.required),
    company: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    room: new FormControl('',Validators.required),
    adults: new FormControl('',Validators.required),
    children: new FormControl('',Validators.required),
    check_in: new FormControl('',Validators.required),
    check_out: new FormControl('',Validators.required)
  })
  editForm = new FormGroup({
    address: new FormControl('',Validators.required),
    phone_no: new FormControl('', Validators.required),
    email: new FormControl('',Validators.required),
    room: new FormControl('',Validators.required),
    adults: new FormControl('',Validators.required),
    children: new FormControl('',Validators.required),
    check_in: new FormControl('',Validators.required),
    check_out: new FormControl('',Validators.required)
  })
  allGuests:Array<any>=[];

  constructor(private httpc: HttpClient) { 
   
  }

  ngOnInit() :void {

    console.log("hello")
    let response:any[]=[]
    this.httpc.get<Object>('http://localhost:5000/guest/guest').subscribe(
      (res) => {
            console.log(res)
            response.push(res)
           
            let recs:any[]=response[0]
            for (let i=0;i<recs.length;i++){
              this.allGuests.push({
                Code: response[0][i].Code,
                guest_name: response[0][i].guest_name,
                age: response[0][i].age,
                gender: response[0][i].gender,    
                phone_no: response[0][i].phone_no,
                company:response[0][i].company,
                address:response[0][i].address,
                email:response[0][i].email,
                room:response[0][i].room,
                adult:response[0][i].adult,
                children:response[0][i].children,
                check_in:response[0][i].check_in,
                check_out:response[0][i].check_out,
                id: response[0][i]._id
               });   
            }
            console.log("hey",response)
        })

        
  }

  changePresentTab(x:any){
    this.PresentTab = x
  }

  editGuests(someID:any){
    console.log(someID)
    this.httpc.get<any>(`http://localhost:5000/guest/guest${someID}`).subscribe((x) => {
      this.PresentGuest = x
      console.log(this.PresentGuest)
      this.editForm.setValue({
        'address':this.PresentGuest.address,
        'phone_no':this.PresentGuest.phone_no,
        'email': this.PresentGuest.email,
        'room': this.PresentGuest.room,
        'adult': this.PresentGuest.adult,
        'children': this.PresentGuest.children,
        'check_in': this.PresentGuest.check_in,
        'check_out': this.PresentGuest.check_out
      })
      this.PresentTab = 2
    })
    
  }

  save(){
    let obj = {
      'room':this.PresentGuest.room,
      'adult': this.editForm.get('adult')?.value,
      'children': this.editForm.get('children')?.value,
      'address': this.editForm.get('address')?.value,
      'phone_no': this.editForm.get('phone_no')?.value,
      'email': this.editForm.get('email')?.value,
      'check_in': this.editForm.get('check_in')?.value,
      'check_out': this.editForm.get('check_out')?.value,
    }
    this.httpc.put<any>(`http://localhost:5000/guest/guest${this.PresentGuest._id}`,obj).subscribe((x) => {
      console.log(x)
      switch(x.message){
        case 'Guest updated': {
          this.allGuests = []
          let response:any[]=[]
          this.httpc.get<Object>('http://localhost:5000/guest/guest').subscribe(
            (res) => {
                  console.log(res)
                  response.push(res)
                
                  let recs:any[]=response[0]
                  for (let i=0;i<recs.length;i++){
                    this.allGuests.push({
                      Code: response[0][i].Code,
                      guest_name: response[0][i].guest_name,
                      age: response[0][i].age,
                      gender: response[0][i].gender,    
                      phone_no: response[0][i].phone_no,
                      company:response[0][i].company,
                      address:response[0][i].address,
                      email:response[0][i].email,
                      room:response[0][i].room,
                      adult:response[0][i].adult,
                      children:response[0][i].children,
                     check_in:response[0][i].check_in,
                     check_out:response[0][i].check_out,
                     id: response[0][i]._id
                    });   
                  }
                  console.log("hey",response)
                  this.PresentTab = 0
              })
          break;
        }
        case 'Guest not updated': {
          alert('Guest did not get updated')
        }
      }
    })
  }
  deleteGuests(someID: any){
    
    this.httpc.delete<any>(`http://localhost:5000/guest/guest/${someID}`).subscribe((x) =>{
      switch(x?.message){
        case 'Guest Deleted': {
          this.allGuests = []
              let response:any[]=[]
              this.httpc.get<Object>('http://localhost:5000/guest/guest').subscribe(
                (res) => {
                      console.log(res)
                      response.push(res)
                    
                      let recs:any[]=response[0]
                      for (let i=0;i<recs.length;i++){
                        this.allGuests.push({
                          Code: response[0][i].Code,
                          guest_name: response[0][i].guest_name,
                          age: response[0][i].age,
                          gender: response[0][i].gender,    
                          phone_no: response[0][i].phone_no,
                          company:response[0][i].company,
                          address:response[0][i].address,
                          email:response[0][i].email,
                          room:response[0][i].room,
                          adult:response[0][i].adult,
                          children:response[0][i].children,
                          check_in:response[0][i].check_in,
                          check_out:response[0][i].check_out,
                          id: response[0][i]._id
                        });   
                      }
                      console.log("hey",response)
                      this.PresentTab = 0
                  })
              break;
        }
        case 'Guest Cannot be deleted':{
          alert('Guest cannot be deleted')
          break;
        }
      }
    })
  }
  addGuests(){
    const obj = {
      'Code': this.guestForm.get('Code')?.value,
      'guest_name': this.guestForm.get('guest_name')?.value,
      'phone_no': this.guestForm.get('phone_no')?.value,
      'email': this.guestForm.get('email')?.value,
      'age': this.guestForm.get('age')?.value,
      'gender': this.guestForm.get('gender')?.value,
      'address': this.guestForm.get('address')?.value,
      'room': this.guestForm.get('room')?.value,
      'adult': this.guestForm.get('adult')?.value,
      'children': this.guestForm.get('children')?.value,
      'check_in': this.guestForm.get('check_in')?.value,
      'check_out': this.guestForm.get('check_out')?.value,  
    }
    console.log(obj)
    this.httpc.post<any>('http://localhost:5000/guest/guest/',obj).subscribe((x) => {
      switch(x.message){
        case 'Guest Added': {
              this.allGuests = []
              let response:any[]=[]
              this.httpc.get<Object>('http://localhost:5000/guest/guest').subscribe(
                (res) => {
                      console.log(res)
                      response.push(res)
                    
                      let recs:any[]=response[0]
                      for (let i=0;i<recs.length;i++){
                        this.allGuests.push({
                          Code: response[0][i].Code,
                          guest_name: response[0][i].guest_name,
                          age: response[0][i].age,
                          gender: response[0][i].gender,    
                          phone_no: response[0][i].phone_no,
                          company:response[0][i].company,
                          address:response[0][i].address,
                          email:response[0][i].email,
                          room:response[0][i].room,
                          adult:response[0][i].adult,
                          children:response[0][i].children,
                          check_in:response[0][i].check_in,
                          check_out:response[0][i].check_out,
                          id: response[0][i]._id
                        });   
                      }
                      console.log("hey",response)
                      this.PresentTab = 0
                  })
              break;
        }
        case 'Guest Not Added': {
          alert('Guest Not Added')
        }
      }
    })
  }
}

