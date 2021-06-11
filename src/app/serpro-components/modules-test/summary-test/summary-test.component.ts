import {Component, Input, OnInit} from '@angular/core';
import {IcfesTest} from "../../../models/test.model";
import {ScoreModel} from "../../../models/score.model";
import {GradeService} from "../../../services/grade.service";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-summary-test',
  templateUrl: './summary-test.component.html',
  styleUrls: ['./summary-test.component.css']
})
export class SummaryTestComponent implements OnInit {
  @Input()
  icfesTest: IcfesTest;
  testId: String;


  modelScoreGrade : ScoreModel;
  
  constructor(private route: ActivatedRoute, private gradeService : GradeService) {
    this.modelScoreGrade = new ScoreModel();
    this.loadPreviousAddress();
  }

  async loadPreviousAddress(){
    this.testId= await this.route.snapshot.params.moduleId;
  }

  ngOnInit(): void {
    this.icfesTest.calculateQtyCorrectQuestions();
  }


  
  PostGradesScore(): void {
    console.log(this.icfesTest.calculateQtyCorrectQuestions());
    console.log(this.modelScoreGrade.userId, this.modelScoreGrade.moduleId,this.modelScoreGrade.testId,this.modelScoreGrade.score,this.modelScoreGrade.time )
    this.gradeService.postScore(this.modelScoreGrade);
  }


}
