import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-m-room',
  templateUrl: './m-room.component.html',
  styleUrls: ['./m-room.component.css']
})
export class MRoomComponent implements OnInit {

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

  changePresentTab(x:any){
    this.PresentTab = x
  }

  editRoom(someID:any){
    console.log(someID)
    this.httpc.get<any>(`http://localhost:4000/rooms/room${someID}`).subscribe((x) => {
      this.PresentRoom = x
      console.log(this.PresentRoom)
      this.editForm.setValue({
        'room_type':this.PresentRoom.room_type,
        'availability': this.PresentRoom.availability,
        'price': this.PresentRoom.price
      })
      this.PresentTab = 2
    })
    
  }

  save(){
    let obj = {
      'room_type':this.PresentRoom.room_type,
      'availability': this.editForm.get('availability')?.value,
      'price': this.editForm.get('price')?.value,
    }
    this.httpc.put<any>(`http://localhost:4000/rooms/room${this.PresentRoom._id}`,obj).subscribe((x) => {
      console.log(x)
      switch(x.message){
        case 'Room updated': {
          this.allRooms = []
          let response:any[]=[]
          this.httpc.get<Object>('http://localhost:4000/rooms/room').subscribe(
            (res) => {
                  console.log(res)
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
                  this.PresentTab = 0
              })
          break;
        }
        case 'Room not updated': {
          alert('Room did not get updated')
        }
      }
    })
  }
  deleteRoom(someID: any){
    // console.log(`http://localhost:3001/room/${someID}`)
    this.httpc.delete<any>(`http://localhost:4000/rooms/room/${someID}`).subscribe((x) =>{
      switch(x?.message){
        case 'Room Deleted': {
          this.allRooms = []
              let response:any[]=[]
              this.httpc.get<Object>('http://localhost:4000/rooms/room').subscribe(
                (res) => {
                      console.log(res)
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
                      this.PresentTab = 0
                  })
              break;
        }
        case 'Room Cannot be deleted':{
          alert('Room cannot be deleted')
          break;
        }
      }
    })
  }
  addRoom(){
    const obj = {
      'room_no': this.roomForm.get('room_no')?.value,
      'bed_type': this.roomForm.get('ed_type')?.value,
      'room_type': this.roomForm.get('room_type')?.value,
      'availability': this.roomForm.get('availability')?.value,
      'price': this.roomForm.get('price')?.value,
    }
    console.log(obj)
    this.httpc.post<any>('http://localhost:4000/rooms/room/',obj).subscribe((x) => {
      switch(x.message){
        case 'Room Created': {
              this.allRooms = []
              let response:any[]=[]
              this.httpc.get<Object>('http://localhost:4000/rooms/room').subscribe(
                (res) => {
                      console.log(res)
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
                      this.PresentTab = 0
                  })
              break;
        }
        case 'Room Not Created': {
          alert('room not created')
        }
      }
    })
  }
}

