import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'serpro-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent implements OnInit {


 
  timeData = "2200";

  config:any;

  constructor( ) { 
  }

  ngOnInit(): void {
    this.config = {leftTime: this.timeData, format: 'mm:ss'};
  }

}
