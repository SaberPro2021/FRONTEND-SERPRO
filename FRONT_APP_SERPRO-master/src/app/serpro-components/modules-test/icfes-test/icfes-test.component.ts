import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/models/question.model';
import { IcfesTest } from 'src/app/models/test.model';
import { QuestionsService } from '../../../services/question.service';

@Component({
  selector: 'app-icfes-test',
  templateUrl: './icfes-test.component.html',
  styleUrls: ['./icfes-test.component.css'],
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
  

  constructor(
    private questionsService: QuestionsService,
    private route: ActivatedRoute,
  ) {
    this.questionCount = -1;
    this.loadCurrentTest();
    this.nextAndSend = 'Siguiente';
  }

  /**
   * TODO: Must be replaced by a service call or an input component variable
   */
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

  ngOnInit(): void {}

  listarQuestions(testId, moduleId) {
    let request = null;
    if (testId !== 'random') {
      request = this.questionsService.getTestById (testId);  
    } else {
      request = this.questionsService.getRandomQuestionsByModuleId(moduleId); 
    }     
    request.subscribe(
      (res: any) => {
        for (let item of res.questions) {
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
        this.currentTest.calculateQtyCorrectQuestions();
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
