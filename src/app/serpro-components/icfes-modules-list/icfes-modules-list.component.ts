import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IcfesModule } from 'src/app/models/module.model';
import { QuestionsService } from 'src/app/services/question.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'serpro-icfes-modules-list',
  templateUrl: './icfes-modules-list.component.html',
  styleUrls: ['./icfes-modules-list.component.css']
})
export class IcfesModulesListComponent implements OnInit {


  panelOpenState = false;
  modules: Observable<IcfesModule[]>;
  numberCountModules: number;
  resultCount : number;
  msgHeader: string;

  constructor(private questionServices: QuestionsService) { }

  ngOnInit(): void {
    this.msgHeader = environment.msgHeader
    this.listarModulos();
  }

  public listarModulos() {
    this.modules = this.questionServices.getAllModules();
    this.modules.forEach(x => {
        console.log(x);
      }
    );

  }



}
