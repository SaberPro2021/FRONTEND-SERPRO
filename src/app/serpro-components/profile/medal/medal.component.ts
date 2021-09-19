import { Component, Input, OnInit } from '@angular/core';
import { IcfesModule } from 'src/app/models/module.model';




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
    this.starTemporalCode = [1];   
    this.cupTemporalCode = 0;
    
  }

  ngOnInit(): void {
  
  }

  
}
