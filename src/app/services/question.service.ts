import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment";
import { IcfesModule } from '../models/module.model';
import { Observable } from 'rxjs';
import { IcfesTest } from '../models/test.model';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  public getAllModules (): Observable<IcfesModule[]>{
    return this.http.get <IcfesModule[]> (`${environment.urlQuestionApi}/module`,{withCredentials: true});
  }

  public getTestsByModuleId (moduleId): Observable<IcfesTest[]> {
    return this.http.get <IcfesTest[]> (`${environment.urlQuestionApi}/icfesTest/moduleId/${moduleId}`,{withCredentials: true});
  }
  
  public getTestById (testId: string): Observable<IcfesTest[]>{
    return this.http.get <IcfesTest[]> (`${environment.urlQuestionApi}/icfesTest/${testId}`,{withCredentials: true});
  }

  public getRandomQuestionsByModuleId (moduleId: string) : Observable<IcfesTest[]>{
    return this.http.get <IcfesTest[]>(`${environment.urlQuestionApi}/question/${moduleId}/${environment.qtyRamdomQuestions}`,{withCredentials: true});
  }

  public getAllQuestion (endpoint: string) : Observable<Question[]>{
    return this.http.get <Question[]>(`${environment.urlQuestionApi}/question`,{withCredentials: true});
  }
}
