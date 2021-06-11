import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { ScoreModel } from '../models/score.model';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }

  postLogin(loginModule: LoginModel) {
    console.log("Metodo PostLogin", loginModule.email)
    console.log(loginModule.password)

    return this.http.post(`${environment.urlQuestionApi}/login`, loginModule).subscribe(
      (response) => {
        console.log(response);
        window.location.href = 'listaModulos';
      },
      error => {
        console.log("entras?")
        window.location.href = 'login';

        console.log(error);
      }
    );
  }
}