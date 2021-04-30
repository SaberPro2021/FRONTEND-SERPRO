import { Answer } from './answer.model';

export class Question {
    
    module: number;
    statement: string;
    questionType: string;
    answers: Answer [];
    selectedAnswer: Answer[];
    feedback : string;
    earnedPoints: number;
    

    constructor (statement: string, answers: Answer [], questionType: string, feedback:string){
        this.statement = statement;
        this.answers = answers;
        this.questionType = questionType;
        this.selectedAnswer = [];
        this.feedback = feedback;
        this.earnedPoints = 0;
    }

    checkAnswerPoints(): number{

        this.earnedPoints = this.selectedAnswer.reduce (
            (previousAnswer, answer)=>{
                return {
                    statement: 'calificacion',
                    grade: previousAnswer.grade + answer.grade 
                };
            }).grade;
         return this.earnedPoints;
    }

}
