import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-owner-guest',
  templateUrl: './owner-guest.component.html',
  styleUrls: ['./owner-guest.component.css']
})
export class OwnerGuestComponent implements OnInit {

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
}