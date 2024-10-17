import { Component, OnInit} from '@angular/core';
import { IcfesModule } from 'src/app/models/module.model';
import { QuestionsService } from 'src/app/services/question.service';

import { IcfesTest } from 'src/app/models/test.model';
import { GradeService } from 'src/app/services/grade.service';
import { LoginService } from 'src/app/services/login.service'
import { environment } from 'src/environments/environment';
import { GaugeComponent } from './gauge/gauge.component';

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
  modules: IcfesModule[];
  tests: IcfesTest[];
  resultCount: number;
  matrixModuleTest: Map<string,any[]> = new Map();
  matrixDescriptionModuleTest: Map<string,any[]> = new Map();
  arrayModulesSession: string[] = [];
  arrayTestsSession: string[] = [];
  dataAcum: Map<string, any> = new Map();
  grades: any[] = [];

  gauges: Map<string,GaugeComponent> = new Map();
  myGauge: GaugeComponent;

  constructor(
    private questionServices: QuestionsService,
    private loginService: LoginService,
    private gradeService: GradeService) {
      this.msgHeader = environment.msgHeader
      this.userName = sessionStorage.getItem('userNameSession');
      this.email = sessionStorage.getItem('emailSession');
      this.image = sessionStorage.getItem('imageSession');
     }

  ngOnInit(): void {

    console.log('ngOnInit')
    this.contarModulos();

    this.loginService.lastSession(this.email).subscribe(
      dataS=> {
      if (dataS[0] != null) {
        this.arrayModulesSession = dataS[0].modules.slice()
        this.arrayTestsSession = dataS[0].tests.slice()
      }
    }).unsubscribe

      this.questionServices.getAllModules().subscribe(
        dataM => {
        this.modules = dataM
        for (let i = 0; i < this.modules.length; i++) {
          console.log("Modules:", this.modules[i]._id);

          let arrayTests = new Array();
          let arrayTestsDesc = new Array();

          if (this.arrayModulesSession.includes(this.modules[i]._id))
            arrayTests.push(1);
          else
            arrayTests.push(0);
          
          arrayTestsDesc.push(this.modules[i].knowledgeArea);

          //the character ; identifies request from profile
          this.questionServices.getTestsByModuleId(this.modules[i]._id + ";").subscribe(
            dataT => {
              this.tests = dataT
              if (this.tests!=undefined) {
              for (let j = 0; j < this.tests.length; j++) {
                if (this.arrayTestsSession.includes(this.tests[j]._id))
                  arrayTests.push(2);
                else
                  arrayTests.push(0);
              arrayTestsDesc.push(this.tests[j].description);
              //console.log(data[index]._id,"<*Modules/Test*>",data1[j]._id);
              }
            
            for (let index = 0; 
                  arrayTests.length <= environment.maxTestsDrawProfile; 
                    index++)
              arrayTests.push(-1)

            this.matrixModuleTest.set(this.modules[i]._id, arrayTests);
            this.matrixDescriptionModuleTest.set(this.modules[i]._id, arrayTestsDesc);
              }
          }).unsubscribe

          this.gradeService.getScoreByModule(this.email).subscribe(
            data => {
              this.grades = data
            for (let index = 0; index < this.grades.length; index++) {
              if (this.grades[index]._id == this.modules[i]._id) {
                this.dataAcum.set(this.modules[i]._id, [(this.grades[index].sum / this.grades[index].count).toFixed(0)]);    
              }
            }
            
            this.myGauge =new GaugeComponent();           
            this.myGauge.chartOptions.series[0].data = 
              this.dataAcum.get(this.modules[i]._id)
            this.gauges.set(this.modules[i]._id, this.myGauge)
            console.log('*****',this.gauges,'//',this.matrixModuleTest)  
            
          }).unsubscribe

        }

      }).unsubscribe
      
      /*
      console.log("Matrix Test", this.matrixModuleTest)
      console.log("Matrix Descp Modules", this.matrixDescriptionModuleTest)
      console.log("Array", this.dataAcum);
      */
    }

  public contarModulos() {
    this.questionServices.getAllModules().subscribe((m)=>{this.resultCount = m.length});
    //console.log("Number count modules",this.resultCount);
  }  

}

