import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { environment } from 'src/environments/environment';
import {GuestRes} from '../model/guestres.response';
import {Guest} from '../model/guest.model';

@Injectable()
export class MGuestService{
    constructor(private http:HttpClient){}
    baseUrl:string='http://localhost:5000/guest/guest/';

    getGuest():Observable<GuestRes>{
        return this.http.get<GuestRes>(this.baseUrl);
    }

    getGuestById(_id:number):Observable<GuestRes>{
        return this.http.get<GuestRes>(this.baseUrl+_id);
    }

    createGuest(guest:Guest):Observable<GuestRes>{
        return this.http.post<GuestRes>(this.baseUrl, guest);
    }

    updateGuest(_id:number, guest:Guest ):Observable<GuestRes>{
        return this.http.put<GuestRes>(this.baseUrl+ guest._id,guest);
    }

    deleteGuest(_id:number):Observable<GuestRes>{
        return this.http.delete<GuestRes>(this.baseUrl+_id,);
    }
}