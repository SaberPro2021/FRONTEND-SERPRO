import { Component, OnInit } from '@angular/core';
import {LoginModel} from '../models/login.model';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : LoginModel;
  constructor(private loginService : LoginService) {
    this.user = new LoginModel();
   }
  
  ngOnInit(): void {
  }

  LoginUser(): void {
    console.log(this.user.email, this.user.password)
    this.loginService.postLogin(this.user);
  }
}
