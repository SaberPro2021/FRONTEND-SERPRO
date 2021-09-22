import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IcfesModule } from 'src/app/models/module.model';
import { QuestionsService } from 'src/app/services/question.service';

import { Observable } from 'rxjs';
import { profile } from 'src/app/models/profile.model';
import { IcfesTest } from 'src/app/models/test.model';
import { session } from 'src/app/models/session.model';

import { LoginService } from 'src/app/services/login.service'

@Component({
  selector: 'serpro-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userName : string;
  email : string;
  image : string;
  descriptionModule : string;
  descriptionTest : string;
  user: Observable<profile[]>; 
  modules: Observable<IcfesModule[]>;
  tests: Observable<IcfesTest[]>;
  sessionStored : Observable<session[]>;
  resultCount : number;
  matrixModuleTest: any[] = [];
  matrixDescriptionModuleTest: any[] = [];

  arrayModulesSession : string[] = [];
  arrayTestsSession : string[] = [];

  constructor(private questionServices: QuestionsService, private loginService: LoginService) { 

    this.listarModulos();
    this.contarModulos();

    this.sessionStored = loginService.lastSession (sessionStorage.getItem('emailSession'));

    this.sessionStored.subscribe((dataM:any)=>{
      for (let i = 0; i < dataM[0].modules.length; i++) 
        this.arrayModulesSession.push(dataM[0].modules[i]);
      for (let k = 0; k < dataM[0].tests.length; k++) 
        this.arrayTestsSession.push(dataM[0].tests[k]);
    
      this.modules.subscribe((data:any)=>{
        for (let index = 0; index < data.length; index++) {
            //console.log("Modules:",data[index]._id);  
            this.descriptionModule = (data[index].description)
            this.tests =  this.questionServices.getTestsByModuleId(data[index]._id); 
            let arrayTests = new Array();
            let arrayTestsDesc = new Array();

            if (this.arrayModulesSession.includes(data[index]._id))
              arrayTests.push(1);  
            else
              arrayTests.push(0);

            arrayTestsDesc.push(this.descriptionModule);
            
            this.tests.subscribe((data1:any)=>{
              for (let j = 0; j < data1.length; j++) {

              if (this.arrayTestsSession.includes(data1[j]._id))
                arrayTests.push(1);  
              else
                arrayTests.push(0);
 
              this.descriptionTest = (data1[j].description)
              arrayTestsDesc.push(this.descriptionTest);
              //console.log(data[index]._id,"<*Modules/Test*>",data1[j]._id);
            }
            this.matrixModuleTest.push(arrayTests); 
            this.matrixDescriptionModuleTest.push(arrayTestsDesc);
          });
        }
      });

    });

    console.log("Matrix", this.matrixModuleTest) 
    //console.log("Matrix", this.matrixDescriptionModuleTest) 
    
    this.userName = sessionStorage.getItem('userNameSession');
    this.email = sessionStorage.getItem('emailSession');
    this.image = sessionStorage.getItem('imageSession');
    //console.log("s", this.qtyModules.contarModulos())   

  }


  public listarModulos() {
    this.modules = this.questionServices.getAllModules();
  }

  public contarModulos(){
    
    this.resultCount = Object.keys(this.modules).length;
    console.log("Number count modules",this.resultCount );
   
  }

  ngOnInit(): void {
  
  }


  
 
}
