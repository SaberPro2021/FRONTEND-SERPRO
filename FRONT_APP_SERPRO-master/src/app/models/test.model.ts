import {Question} from  './question.model';
export class IcfesTest {

    constructor () {
        this.questions = new Array <Question>();
        this.qtyCorrectQuestions = 0;
    }
    title: string;
    description: string;
    progress: number;
    module: number;
    questions: Question[];
    qtyCorrectQuestions : number;


    calculateQtyCorrectQuestions() {
      this.qtyCorrectQuestions = 0;
      this.questions.forEach(
        (question) => {          
          if(question.checkAnswerPoints() > 0){
            this.qtyCorrectQuestions +=1;
          }
        }
      )
    }


}
