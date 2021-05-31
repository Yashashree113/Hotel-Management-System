import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: any = {};
  constructor() { }

  ngOnInit(): void {
  }
  loginUser() {
    this._user.loginUser(this.loginData).subscribe(
      (res) => {
        console.log(res),
          localStorage.setItem('token', res.token),
          this._router.navigate(['/product']);
      },
      (err) => console.log(err)
    );
  }
}
}
