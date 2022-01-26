import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FinalScore } from '../models/finalScore.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  constructor(private http: HttpClient) { 

  }

  postScore(finalScore:FinalScore)  {

    return this.http.post(`${environment.urlQuestionApi}/Grade`, finalScore).subscribe(
      (response) =>{
        console.log (response);
      },
      error => {
        console.log (error);
      }
    );
  }

}