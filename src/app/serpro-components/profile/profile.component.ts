import { Component, OnInit } from '@angular/core';
import { IcfesModule } from 'src/app/models/module.model';
import { IcfesTest } from 'src/app/models/test.model';

@Component({
  selector: 'serpro-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  nombreUsuario:String;
  correoUsuario:String;
  module:IcfesModule;
  sizeTemporal: Number[];
  constructor() { 
    this.sizeTemporal = [1,2,3,4,5];
    this.nombreUsuario = "Intento quemado";
    this.correoUsuario = "correoTest@gmail.conm";
  }

  ngOnInit(): void {
  }

}
