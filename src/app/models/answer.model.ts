export class Answer {

    statement: string;
    grade : number;

    constructor (grade?: number, statement?: string) {
        this.grade = grade ? grade : 0;
        this.statement = statement;
    }

}