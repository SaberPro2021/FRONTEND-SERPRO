import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment";
import { IcfesModule } from '../models/module.model';
import { Observable } from 'rxjs';
import { IcfesTest } from '../models/test.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  public getAllModules (): Observable<IcfesModule[]>{
    return this.http.get <IcfesModule[]> (`${environment.urlQuestionApi}/module`);
  }

  public getTestsByModuleId (moduleId): Observable<IcfesTest[]> {
    return this.http.get <IcfesTest[]> (`${environment.urlQuestionApi}/icfesTest/moduleId/${moduleId}`);
  }
  
  public getTestById (testId: string){
    // TODO: UPDATE WHEN BACK SERVICE IS FIXED
    return this.http.get(`${environment.urlQuestionApi}/icfesTest/${testId}`);
    //return this.http.get <IcfesTest[]> (`${environment.urlQuestionApi}/icfesTest/`);
  }

  public getRandomQuestionsByModuleId (moduleId: string){
    return this.http.get(`${environment.urlQuestionApi}/question/${moduleId}/${environment.qtyRamdomQuestions}`);
  }

  public getAllQuestion (endpoint: string){
    return this.http.get(`${environment.urlQuestionApi}/question`);
  }
}
