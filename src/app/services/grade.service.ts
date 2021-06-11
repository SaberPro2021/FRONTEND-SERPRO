import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScoreModel } from '../models/score.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  constructor(private http: HttpClient) { 

  }

  postScore(scoreModel:ScoreModel)  {

    return this.http.post(`${environment.urlQuestionApi}/Grade`, scoreModel).subscribe(
      (response) =>{
        console.log (response);
      },
      error => {
        console.log (error);
      }
    );
  }

}