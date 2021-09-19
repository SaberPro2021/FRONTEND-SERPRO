import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IcfesModule } from 'src/app/models/module.model';
import { QuestionsService } from 'src/app/services/question.service';

import { Observable } from 'rxjs';
import { profile } from 'src/app/models/profile.model';
import { IcfesTest } from 'src/app/models/test.model';

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
  resultCount : number;
  //arrayTests: number[] = []; 
  matrixModuleTest: any[] = [];


  constructor(private questionServices: QuestionsService) { 

    this.listarModulos();
    this.contarModulos();

    this.modules.subscribe((data:any)=>{
      for (let index = 0; index < data.length; index++) {
          //console.log("Modules:",data[index]._id);  
          this.tests =  this.questionServices.getTestsByModuleId(data[index]._id); 
          let arrayTests = new Array();  
          this.tests.subscribe((data1:any)=>{
          for (let j = 0; j < data1.length; j++) {
            arrayTests.push(0); 
            //console.log(data[index]._id,"<*Modules/Test*>",data1[j]._id);
          }
          this.matrixModuleTest.push(arrayTests); 
        });
      }
    });

    console.log("Matrix", this.matrixModuleTest)
    //this.starTemporalCode = [1];   
    
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
