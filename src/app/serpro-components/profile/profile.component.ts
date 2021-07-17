import { Component, OnInit } from '@angular/core';
import { IcfesModule } from 'src/app/models/module.model';
import { IcfesTest } from 'src/app/models/test.model';

@Component({
  selector: 'serpro-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userName : string;
  email : string;
  module:IcfesModule;
  sizeTemporal: Number[];

  constructor() { 
    this.sizeTemporal = [1,2,3,4,5];
    this.userName = sessionStorage.getItem('userNameSession');
    this.email = sessionStorage.getItem('emailSession');
  }

  ngOnInit(): void {
  }

}
