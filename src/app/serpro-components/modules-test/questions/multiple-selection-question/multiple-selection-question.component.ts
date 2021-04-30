import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/models/question.model';

@Component({
  selector: 'app-multiple-selection-question',
  templateUrl: './multiple-selection-question.component.html',
  styleUrls: ['./multiple-selection-question.component.css']
})
export class MultipleSelectionQuestionComponent implements OnInit {

  @Input ()
  question: Question;

  @Input()
  isEditable: boolean;



  constructor() {
    if (this.isEditable != true) {
      this.isEditable = true;
    }

  }
  ngOnInit(): void {
  }
}
