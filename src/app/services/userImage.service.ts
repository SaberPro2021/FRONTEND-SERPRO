import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { profile } from '../models/profile.model';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class userImageService {

    constructor(private http: HttpClient) { }

    public getAllUsers(): Observable<profile[]> {
        return this.http.get<profile[]>(`${environment.urlQuestionApi}/users`, { withCredentials: true });
    }

    public getUserById(userId): Observable<profile[]> {
        return this.http.get<profile[]>(`${environment.urlQuestionApi}/users/${userId}`, { withCredentials: true });
    }


}
