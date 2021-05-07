import { Component, Input, OnInit } from '@angular/core';
import { IcfesModule } from "../../../models/module.model";

@Component({
  selector: 'serpro-medal',
  templateUrl: './medal.component.html',
  styleUrls: ['./medal.component.css']
})
export class MedalComponent implements OnInit {

  @Input() test?:IcfesModule;
  starTemporalCode: Number[]; 
  cupTemporalCode: Number;
  constructor() { 
    this.starTemporalCode = [2,2,0,2,1,0,0];
    this.cupTemporalCode = 1;
    console.log(this.starTemporalCode)
  }

  ngOnInit(): void {
  }

}
