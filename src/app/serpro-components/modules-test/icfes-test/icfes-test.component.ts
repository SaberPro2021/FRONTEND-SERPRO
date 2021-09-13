import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/models/question.model';
import { IcfesTest } from 'src/app/models/test.model';
import { QuestionsService } from '../../../services/question.service';
import { FinalScore } from 'src/app/models/finalScore.model';
import { GradeService } from '../../../services/grade.service';
import { TimerComponent } from '../../timer/timer.component';
import { Observable } from 'rxjs';

@Component({

  selector: 'app-icfes-test',
  templateUrl: './icfes-test.component.html',
  styleUrls: ['./icfes-test.component.css']

})

export class IcfesTestComponent implements OnInit {
  currentQuestion: Question;
  currentTest: IcfesTest;
  questionCount: number;
  progressIncrement: number;
  testEnded: boolean;
  endPoint = 'question';
  nextAndSend: string;
  alert: boolean;
  finalScore : FinalScore;
  request: Observable<IcfesTest[]>;

  @ViewChild('tc', { static: false })
  test : TimerComponent

  lengthArrayQ : number;

  constructor(
    private questionsService: QuestionsService,
    private route: ActivatedRoute,
    private gradeService : GradeService,
  ) {
    this.questionCount = -1;
    this.lengthArrayQ = -1;
    this.loadCurrentTest();
    this.nextAndSend = 'Siguiente';
    this.finalScore = new FinalScore();
  }

  async loadCurrentTest() {
    const testId = await this.route.snapshot.params.testId;
    const moduleId = await this.route.snapshot.params.moduleId;
    this.currentTest = new IcfesTest();
    this.currentTest.progress = 0;
    this.listarQuestions(testId,moduleId);
  }

  calculateProgressIncrement() {
    this.progressIncrement = 100 / this.currentTest.questions.length;
  }

  ngOnInit(): void {
  }

  listarQuestions(testId, moduleId) {
    
    if (testId !== 'random') {
      this.request = this.questionsService.getTestById (testId); 
    } else {
      this.request = this.questionsService.getRandomQuestionsByModuleId(moduleId); 
    }  

    this.request.subscribe(
      (data:any) => {
        for (let item of data.questions) {
          const objTmp = new Question(
            item.statement,
            item.answers,
            item.questionType,
            item.feedback
          );
          this.currentTest.questions.push(
            objTmp  
          );
        }   
        this.lengthArrayQ = this.currentTest.questions.length;   
        this.calculateProgressIncrement();
        this.nextAction();        
      },
      (err) => {},
    );
    
  } 
  
  nextAction() {
    if (this.questionCount == this.currentTest.questions.length - 2) {
      this.nextAndSend = 'ENVIAR';
    }
    if (this.questionCount < this.currentTest.questions.length - 1) {
      this.currentTest.progress += this.progressIncrement;
      this.currentQuestion = this.currentTest.questions[++this.questionCount];
    } else {
      if(this.verifyAnswers()){

        const timeTests = this.test.stopper ();
        console.log("Bonus Win (time) -- > " ,timeTests);

        this.currentTest.calculateQtyCorrectQuestions();
    
        const emailSession = sessionStorage.getItem('emailSession');
        const idTest = this.route.snapshot.params.testId;
        const idModule = this.route.snapshot.params.moduleId;
        const finalScore = this.currentTest.qtyCorrectQuestions;

        const date = new Date();
        console.log("Fechaaaaaaaa -- > " ,date.toString());

        this.finalScore.userId = emailSession;
        this.finalScore.testId = idTest;
        this.finalScore.moduleId= idModule;
        this.finalScore.score = finalScore;
        this.finalScore.time= timeTests;
        this.finalScore.date = date.toString();
       
        console.log("Objeto -> ",this.finalScore);

        this.gradeService.postScore(this.finalScore);

        this.testEnded = true;
        
      }else {
        this.alert = true;
      }
    }
  }

  previousAction() {
    this.currentTest.progress -= this.progressIncrement;
    this.currentQuestion = this.currentTest.questions[--this.questionCount];
    this.alert = false;
  }

  verifyAnswers(): boolean{
    let accept = true;
    this.currentTest.questions.forEach(element => {
      if(element.selectedAnswer.length === 0){
        accept = false;
      }
    });
    return accept;
  }
}
