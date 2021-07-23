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

  user : LoginModel;
  constructor(private loginService : LoginService, private router: Router) {
    this.user = new LoginModel();
   }
  
  ngOnInit(): void {
  }

  LoginUser(): void {
    //console.log(this.user.email, this.user.password)
    this.loginService.postLogin(this.user);
    //this.router.navigate(['listaModulos'])
  }
}
