import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { CountdownComponent, CountdownConfig, CountdownEvent } from 'ngx-countdown';

@Component({

  selector: 'serpro-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  host: {
    '[class.card]': `true`,
    '[class.text-center]': `true`,
  },
  changeDetection: ChangeDetectionStrategy.OnPush,

})


export class TimerComponent {

  private strStopTime : string;
  @ViewChild('cd', { static: false }) 
  private cdComp : CountdownComponent;

  config: CountdownConfig = {
    leftTime: 1200,
    format: 'mm:ss'
  };

  handleEvent(e: CountdownEvent) {
    console.log('Actions', e  );
    this.strStopTime = e.text; 
  }

  stopper () : string {

    this.cdComp.stop();
    console.log("Stop Timer Called");
    return this.strStopTime;

  }

}