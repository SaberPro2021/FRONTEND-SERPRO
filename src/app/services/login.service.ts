import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/login.model';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { session } from '../models/session.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  islogged:boolean;
  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) {
    this.islogged = false;
  }

  postLogin(loginModule: LoginModel) {
    loginModule.password = btoa(loginModule.password)
    return this.http.post(`${environment.urlQuestionApi}/login`,  loginModule,
      {withCredentials: true 
    }).subscribe(
       (response) => {
          sessionStorage.setItem('userNameSession',response['userName'])
          sessionStorage.setItem('emailSession',response['email'])
          sessionStorage.setItem('imageSession',response['image'])
          console.log("Hi",response['userName'], "Welcome...");
          environment.msgHeader = environment.msgGralApp + ' '+ sessionStorage.getItem('userNameSession');
          this.islogged = true;
          this.router.navigate(['listaModulos'])
        }, 
        (err) => {
          this.islogged = false;
          if (err.error.message != null) {
            this.toastr.error (err.error.message);
            console.log("login.service -> postLogin ",err.error.message);
          }
          else {
            this.toastr.error (err.message,"Error de conexión.");
            console.log("login.service -> postLogin (posible desconexión de servicios de backend o ldap)",err);
          }
        }
      );
  }

  lastSession(req: string) : Observable<session[]> {
    return this.http.get <session[]> (`${environment.urlQuestionApi}/GetSessionByid/${req}`,{withCredentials: true });
  }

  postLogout() {
    return this.http.get(`${environment.urlQuestionApi}/logout`,{withCredentials: true })
    .subscribe(
      (response) => {
        sessionStorage.clear;
        this.router.navigate(['login'])
      }, 
      (err) => {
        this.toastr.error ("Error de conexión. ",err.message);
        console.log("login.service -> postLogout (posible desconexión de servicios de backend o ldap)",err.message);
      }
    );
  }

}