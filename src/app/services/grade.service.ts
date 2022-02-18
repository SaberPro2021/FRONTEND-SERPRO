import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FinalScore } from '../models/finalScore.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  constructor(private http: HttpClient, private toastr: ToastrService) {

  }

  public postScore(finalScore: FinalScore) {

    return this.http.post(`${environment.urlQuestionApi}/Grade`, finalScore).subscribe(
      (response) => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  public getScoreByModule(userId: string): Observable<any> {
    return this.http.get<any>(`${environment.urlQuestionApi}/Grade/${userId}`)
      .pipe(
        catchError((err) => {
          console.warn(err);
          this.toastr.warning(err.message);
          throw err;
        })
      );
  }

}