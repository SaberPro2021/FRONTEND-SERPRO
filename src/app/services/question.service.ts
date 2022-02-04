import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { IcfesModule } from '../models/module.model';
import { Observable } from 'rxjs';
import { IcfesTest } from '../models/test.model';
import { Question } from '../models/question.model';
import { catchError, map, retry } from 'rxjs/operators'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }

  public getAllModules (): Observable<IcfesModule[]>{
    return this.http.get <IcfesModule[]> (`${environment.urlQuestionApi}/module`,{withCredentials: true})
    .pipe(
      catchError((err) => {
        console.warn(err);
        this.toastr.warning (err.message);
        throw err;
      }
      )
    );
  }

  public getTestsByModuleId (moduleId: string): Observable<IcfesTest[]> {
    return this.http.get <IcfesTest[]> (`${environment.urlQuestionApi}/icfesTest/moduleId/${moduleId}`,{withCredentials: true})
    .pipe(
      catchError((err) => {
        console.warn(err);
        this.toastr.warning (err.message);
        throw err;
      }
      )
    );
  }
  
  public getTestById (testId: string): Observable<IcfesTest[]>{
    return this.http.get <IcfesTest[]> (`${environment.urlQuestionApi}/icfesTest/${testId}`,{withCredentials: true})
    .pipe(
      catchError((err) => {
        console.warn(err);
        this.toastr.warning (err.message);
        throw err;
      }
      )
    );
  }

  public getRandomQuestionsByModuleId (moduleId: string) : Observable<IcfesTest[]>{
    return this.http.get <IcfesTest[]>(`${environment.urlQuestionApi}/question/${moduleId}/${environment.qtyRamdomQuestions}`,{withCredentials: true})
    .pipe(
      catchError((err) => {
        console.warn(err);
        this.toastr.warning (err.message);
        throw err;
      }
      )
    );
  }

  public getAllQuestion (endpoint: string) : Observable<Question[]>{
    return this.http.get <Question[]>(`${environment.urlQuestionApi}/question`,{withCredentials: true})
    .pipe(
      catchError((err) => {
        console.warn(err);
        this.toastr.warning (err.message);
        throw err;
      }
      )
    );
  }
}
