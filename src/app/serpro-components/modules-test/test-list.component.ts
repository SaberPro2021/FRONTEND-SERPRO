import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IcfesTest } from 'src/app/models/test.model';
import { environment } from 'src/environments/environment';
import { QuestionsService } from '../../services/question.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css'],
})
export class TestListComponent implements OnInit {
  panelOpenState = false;
  tests: Observable<IcfesTest[]>;
  moduleId: string;
  msgHeader: any;

  constructor(
    private questionServices: QuestionsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.msgHeader = environment.msgHeader
    this.listarModulos();
  }

  async listarModulos() {
    this.moduleId = await this.route.snapshot.params.moduleId;

    this.tests = this.questionServices.getTestsByModuleId(this.moduleId);

  }

  // Redirect and show test
  openTest() {}

  // Redirect and generate a random test
  openRandomTest() {}
}
