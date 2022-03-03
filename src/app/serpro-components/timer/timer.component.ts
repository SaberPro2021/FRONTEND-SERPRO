import { Component } from '@angular/core';

@Component({

  selector: 'serpro-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],

})

export class TimerComponent {

  value: number;
  points: number;
  stopval: number;

  options = {
    backgroundColor: "#1ab6e3",
    radius: 60,
    units: "Puntos",
    subtitle: "Puedes lograr",
    unitsColor: "#000040",
    unitsFontWeight: "500",
    outerStrokeWidth: 7,
    innerStrokeWidth: 10,
    outerStrokeLinecap: "butt",
    outerStrokeColor: "#FFFFFF",
    innerStrokeColor: "#FFFFFF",
    unitsFontSize: "20",
    titleFontSize: "30",
    titleFontWeight: "500",
    titleColor: "#000040",
    subtitleColor: "#483500",
    showSubtitle: false,
    showInnerStroke: false,
    startFromZero: false,
    clockwise: false,
    renderOnClick: false,
    animation: true,
    animationDuration: 200000,
    percent: 100,
    titleFormat: (percent) => {
      if (this.value == this.points) {
        clearInterval(this.value);
        this.stopval = this.value;
        this.value = this.points;
      } else
        this.value = 101 - percent;
      return this.value;
    }
  }

  constructor() {
    this.points = 0
    this.stopval = 100
  }

  stopper(): number {
    this.points = this.value;
    return this.points;
  }

}