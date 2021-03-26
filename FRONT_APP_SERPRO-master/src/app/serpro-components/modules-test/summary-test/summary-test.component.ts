import {Component, Input, OnInit} from '@angular/core';
import {IcfesTest} from "../../../models/test.model";
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
  
  constructor(private route: ActivatedRoute) {
    this.loadPreviousAddress();
  }

  async loadPreviousAddress(){
    this.testId= await this.route.snapshot.params.moduleId;
  }

  ngOnInit(): void {
    this.icfesTest.calculateQtyCorrectQuestions();
  }

}
