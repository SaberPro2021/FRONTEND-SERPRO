import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { IcfesModule } from 'src/app/models/module.model';
import { QuestionsService } from 'src/app/services/question.service';

import { Observable } from 'rxjs';
import { profile } from 'src/app/models/profile.model';
import { IcfesTest } from 'src/app/models/test.model';
import { session } from 'src/app/models/session.model';
import { GradeService } from 'src/app/services/grade.service';
import { LoginService } from 'src/app/services/login.service'
import { environment } from 'src/environments/environment';
import { TimerComponent } from '../timer/timer.component';
import { DynamicChildLoaderDirective } from 'src/app/services/dynamic-child-loader.directive';
import { GaugeComponent } from './gauge/gauge.component';

@Component({
  selector: 'serpro-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit, AfterViewInit {

  userName: string;
  email: string;
  image: string;
  msgHeader: string;
  user: Observable<profile[]>;
  modules: Observable<IcfesModule[]>;
  tests: Observable<IcfesTest[]>;
  sessionStored: Observable<session[]>;
  resultCount: number;
  matrixModuleTest: any[] = [];
  matrixDescriptionModuleTest: any[] = [];
  arrayModulesSession: string[] = [];
  arrayTestsSession: string[] = [];
  dataAcum: Map<string, any> = new Map();

  @ViewChildren(DynamicChildLoaderDirective)
  public dynamicChild: QueryList<DynamicChildLoaderDirective>;

  constructor(private questionServices: QuestionsService,
    private loginService: LoginService,
    private gradeService: GradeService) { }

  ngOnInit(): void {

    this.msgHeader = environment.msgHeader

    this.listarModulos();
    this.contarModulos();

    this.userName = sessionStorage.getItem('userNameSession');
    this.email = sessionStorage.getItem('emailSession');
    this.image = sessionStorage.getItem('imageSession');
    //console.log("s", this.qtyModules.contarModulos())   

    this.sessionStored = this.loginService.lastSession(this.email);

    this.sessionStored.subscribe((dataS: any) => {

      if (dataS[0] != null) {
        this.arrayModulesSession = dataS[0].modules.slice()
        this.arrayTestsSession = dataS[0].tests.slice()
      }

      this.modules.subscribe((dataM: any) => {

        for (let i = 0; i < dataM.length; i++) {
          //console.log("Modules:", dataM[i]._id);

          let arrayTests = new Array();
          let arrayTestsDesc = new Array();

          if (this.arrayModulesSession.includes(dataM[i]._id))
            arrayTests.push(1);
          else
            arrayTests.push(0);
          
          arrayTestsDesc.push(dataM[i].knowledgeArea);

          //the character ; identifies request from profile
          this.tests = this.questionServices.getTestsByModuleId(dataM[i]._id + ";");

          this.tests.subscribe((dataT: any) => {
            for (let j = 0; j < dataT.length; j++) {
              if (this.arrayTestsSession.includes(dataT[j]._id))
                arrayTests.push(2);
              else
                arrayTests.push(0);
              arrayTestsDesc.push(dataT[j].description);
              //console.log(data[index]._id,"<*Modules/Test*>",data1[j]._id);
            }

            for (let index = 0; arrayTests.length <= environment.maxTestsDrawProfile; index++) {
              arrayTests.push(-1)
            }

            this.matrixModuleTest.push(arrayTests);
            this.matrixDescriptionModuleTest.push(arrayTestsDesc);
          });

          this.gradeService.getScoreByModule(this.email).subscribe((data: any) => {
            for (let index = 0; index < data.length; index++) {
              if (data[index]._id == dataM[i]._id) {
                this.dataAcum.set(dataM[i]._id, [(data[index].sum / data[index].count).toFixed(0)]);
              }
            }
          });

        }

      });
      
      /*
      console.log("Matrix Test", this.matrixModuleTest)
      console.log("Matrix Descp Modules", this.matrixDescriptionModuleTest)
      console.log("Array", this.dataAcum);
      */
    });


  }

  ngAfterViewInit(): void {
    this.dynamicChild.changes.forEach((item: QueryList<DynamicChildLoaderDirective>) => {
      if (item.length == this.resultCount)
        item.forEach((v: DynamicChildLoaderDirective, index: number) => {
          var c = v.viewContainerRef.createComponent(GaugeComponent).instance
          c.chartOptions.series[0].data = this.dataAcum.get(this.arrayModulesSession[index].toString())
          //console.log(index, ' ' ,this.arrayModulesSession[index].toString(), ,this.dataAcum.get(this.arrayModulesSession[index].toString()))          
        })
    });
  }

  public listarModulos() {
    this.modules = this.questionServices.getAllModules();
  }

  public contarModulos() {
    this.modules.subscribe((m)=>{this.resultCount = m.length});
    //console.log("Number count modules",this.resultCount);
  }  

}

