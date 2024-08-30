import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthguardService  {

    constructor(private loginService: LoginService, private router: Router, private toastr: ToastrService) { }

    canActivate() {
        // If the user is not logged in we'll send them back to the home page
        if (!this.loginService.islogged) {
            console.log('Usuario no autenticado')
            this.toastr.warning ('Usuario no autenticado');
            this.router.navigate(['/']);
            return false;
        }

        return true;
    }
}

