import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-owner-room',
  templateUrl: './owner-room.component.html',
  styleUrls: ['./owner-room.component.css']
})
export class OwnerRoomComponent implements OnInit {



  PresentTab:any = 0
  PresentRoom:any = 0
  signupForm = new FormGroup({
    sgEmail: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[a-z]{2,4}$')]),
    sgPwd: new FormControl('',Validators.required)
  })
  loginForm = new FormGroup({
    loginEmail: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[a-z]{2,4}$')]),
    loginPwd: new FormControl('',Validators.required)
  })
  roomForm = new FormGroup({
    room_no: new FormControl('', Validators.required),
    room_type: new FormControl('',Validators.required),
    bed_type: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    availability: new FormControl('',Validators.required)
  })
  editForm = new FormGroup({
    room_type: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    availability: new FormControl('',Validators.required)
  })
  allRooms:Array<any>=[];

  constructor(private httpc: HttpClient) { 
   
  }

  ngOnInit() :void {

    console.log("hello")
    let response:any[]=[]
    this.httpc.get<Object>('http://localhost:4000/rooms/room').subscribe(
      (res) => {
            console.log(res)
            // console.log(this.allRooms)
            response.push(res)
           
            let recs:any[]=response[0]
            for (let i=0;i<recs.length;i++){
              this.allRooms.push({availability: response[0][i].availability,
                bed_type: response[0][i].bed_type,
                price: response[0][i].price,
                room_no: response[0][i].room_no,    
                room_type: response[0][i].room_type,
                updatedOn:response[0][i].updatedOn,
                id: response[0][i]._id
               });   
            }
            console.log("hey",response)
        })

        
  }
}
