import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IcfesModule } from 'src/app/models/module.model';
import { QuestionsService } from 'src/app/services/question.service';

@Component({
  selector: 'serpro-icfes-modules-list',
  templateUrl: './icfes-modules-list.component.html',
  styleUrls: ['./icfes-modules-list.component.css']
})
export class IcfesModulesListComponent implements OnInit {

  
  panelOpenState = false;
  modules: Observable<IcfesModule[]>;

  constructor(private questionServices: QuestionsService) {}


  ngOnInit(): void {
    this.listarModulos();
  }

  public listarModulos(){
    this.modules = this.questionServices.getAllModules();
  }

}
