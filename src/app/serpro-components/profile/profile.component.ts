import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IcfesModule } from 'src/app/models/module.model';
import { QuestionsService } from 'src/app/services/question.service';

import { Observable } from 'rxjs';
import { profile } from 'src/app/models/profile.model';
import { IcfesTest } from 'src/app/models/test.model';
import { session } from 'src/app/models/session.model';

import { LoginService } from 'src/app/services/login.service'
import { exit } from 'process';

@Component({
  selector: 'serpro-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userName : string;
  email : string;
  image : string;
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

    this.sessionStored.subscribe((dataS:any)=>{

      if (dataS[0]!=null) {
          this.arrayModulesSession = dataS[0].modules.slice()
          this.arrayTestsSession = dataS[0].tests.slice()
      }

      this.modules.subscribe((dataM:any)=>{
        for (let i = 0; i < dataM.length; i++) {
            //console.log("Modules:",data[index]._id);  
          
            let arrayTests = new Array();
            let arrayTestsDesc = new Array();

            if (this.arrayModulesSession.includes(dataM[i]._id))
              arrayTests.push(1);  
            else
              arrayTests.push(0);

            arrayTestsDesc.push(dataM[i].description);

            //the character ; identifies request from profile
            this.tests =  this.questionServices.getTestsByModuleId(dataM[i]._id+";");
            this.tests.subscribe((dataT:any)=>{
              for (let j = 0; j < dataT.length; j++) {

                if (this.arrayTestsSession.includes(dataT[j]._id))
                  arrayTests.push(2);  
                else
                  arrayTests.push(0);

              arrayTestsDesc.push(dataT[j].description);
              //console.log(data[index]._id,"<*Modules/Test*>",data1[j]._id);
            }
            this.matrixModuleTest.push(arrayTests); 
            this.matrixDescriptionModuleTest.push(arrayTestsDesc);
          });
        }          
      });

    });

    //console.log("Matrix", this.matrixModuleTest) 
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
    //console.log("Number count modules",this.resultCount );
   
  }

  ngOnInit(): void {
  
  }


  
 
}
