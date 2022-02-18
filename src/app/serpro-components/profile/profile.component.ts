import { AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, OnInit, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { IcfesModule } from 'src/app/models/module.model';
import { QuestionsService } from 'src/app/services/question.service';

import { Observable } from 'rxjs';
import { profile } from 'src/app/models/profile.model';
import { IcfesTest } from 'src/app/models/test.model';
import { session } from 'src/app/models/session.model';

import { LoginService } from 'src/app/services/login.service'
import { GradeService } from 'src/app/services/grade.service';
import { environment } from 'src/environments/environment';
import { ChartType, GoogleChartComponent } from 'angular-google-charts';
import { TimerComponent } from '../timer/timer.component';


@Component({
  selector: 'serpro-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

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

  myType = 'PieChart';
  myData = [
      ['London', 8136000],
      ['New York', 8538000],
      ['Paris', 2244000],
      ['Berlin', 3470000],
      ['Kairo', 19500000]
    ];

  chart = {
    options: {
      width: 100,
      height: 100,
      greenFrom: 75,
      greenTo: 100,
      redFrom: 0,
      redTo: 50,
      yellowFrom: 50,
      yellowTo: 75,
      minorTicks: 5
    }
  };
  dataAcum: any[] = [];

  googleGauge: GoogleChartComponent;

  constructor(private questionServices: QuestionsService,
    private loginService: LoginService,
    private gradeService: GradeService,
    private virtualcontainer: ViewContainerRef) {
    //private resolver: ComponentFactoryResolver) {

    this.listarModulos();
    this.contarModulos();

    google.charts.load('current', {'packages':['gauge']});

    this.userName = sessionStorage.getItem('userNameSession');
    this.email = sessionStorage.getItem('emailSession');
    this.image = sessionStorage.getItem('imageSession');
    //console.log("s", this.qtyModules.contarModulos())   

    this.sessionStored = loginService.lastSession(this.email);

    this.sessionStored.subscribe((dataS: any) => {

      if (dataS[0] != null) {
        this.arrayModulesSession = dataS[0].modules.slice()
        this.arrayTestsSession = dataS[0].tests.slice()
      }

      this.modules.subscribe(async (dataM: any) => {
        for (let i = 0; i < dataM.length; i++) {
          //console.log("Modules:",data[index]._id);  

          let arrayTests = new Array();
          let arrayTestsDesc = new Array();

          if (this.arrayModulesSession.includes(dataM[i]._id))
            arrayTests.push(1);
          else
            arrayTests.push(0);

          arrayTestsDesc.push(dataM[i].knowledgeArea);

          //the character ; identifies request from profile
          this.tests = this.questionServices.getTestsByModuleId(dataM[i]._id + ";");
          
          this.tests.subscribe(async (dataT: any) => {
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

          gradeService.getScoreByModule(this.email).subscribe(async (data: any) => {
              this.dataAcum = [];
              for (let k = 0; k < data.length; k++)
                if (data[k]._id == dataM[i]._id) {
                  this.dataAcum.push(['%', data[k].sum / data[k].count]);

 
                  //google.charts.setOnLoadCallback(drawChart);    

                  
                  //const Factory = this.resolver.resolveComponentFactory(GoogleChartComponent);
                  
                  //this.googleGauge.type = ChartType.Gauge;
                  //this.googleGauge.options = this.chart.options;
                  //this.googleGauge.data = this.dataAcum;                  
                  //const componentRef = this.virtualcontainer.createComponent(this.googleGauge);

                  //console.log("-->", this.googleGauge.data);
                  
                  
                }
            }
          );

        }
      });

    });

    //console.log("Matrix", this.matrixModuleTest)
    //console.log("Matrix", this.matrixDescriptionModuleTest) 

  }

  public listarModulos() {
    this.modules = this.questionServices.getAllModules();
  }

  public contarModulos() {

    this.resultCount = Object.keys(this.modules).length;
    //console.log("Number count modules",this.resultCount );

  }

  ngOnInit(): void {

    this.msgHeader = environment.msgHeader

  }



}

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Memory', 80],
    ['Network', 68]
  ]);

  var options = {
    width: 400, height: 120,
    redFrom: 90, redTo: 100,
    yellowFrom:75, yellowTo: 90,
    minorTicks: 5
  };

  var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

  chart.draw(data, options);

  setInterval(function() {
    data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
    chart.draw(data, options);
  }, 5000);
  setInterval(function() {
    data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
    chart.draw(data, options);
  }, 26000);
}