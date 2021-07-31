import { Component, OnInit } from '@angular/core';
import {LoginModel} from '../models/login.model';
import {LoginService} from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userCredentials : LoginModel;
  constructor(private loginService : LoginService, private router: Router) {
    this.userCredentials = new LoginModel();
   }
  
  ngOnInit(): void {
  }

  LoginUser(): void {
    this.loginService.postLogin(this.userCredentials);

  }
}
