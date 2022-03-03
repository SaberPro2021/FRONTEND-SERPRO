import { Component } from '@angular/core';

@Component({

  selector: 'serpro-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],

})

export class TimerComponent {

<<<<<<< HEAD
  value: number;
  points: number;
  stopval: number;

=======
  value : number;
  points: number;
  stopval: number;
  
>>>>>>> e2338841b56ba7e1f3acd0c75468d1c3d5475d37
  options = {
    backgroundColor: "#1ab6e3",
    radius: 60,
    units: "Puntos",
<<<<<<< HEAD
    subtitle: "Puedes lograr",
=======
    subtitle : "Puedes lograr",
>>>>>>> e2338841b56ba7e1f3acd0c75468d1c3d5475d37
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
<<<<<<< HEAD
    percent: 100,
    titleFormat: (percent) => {
      if (this.value == this.points) {
        clearInterval(this.value);
        this.stopval = this.value;
=======
    percent : 100,
    titleFormat: (percent) => {
      if (this.value==this.points) {
        clearInterval(this.value);
        this.stopval = this.value; 
>>>>>>> e2338841b56ba7e1f3acd0c75468d1c3d5475d37
        this.value = this.points;
      } else
        this.value = 101 - percent;
      return this.value;
    }
  }

<<<<<<< HEAD
  constructor() {
=======
  constructor () {
>>>>>>> e2338841b56ba7e1f3acd0c75468d1c3d5475d37
    this.points = 0
    this.stopval = 100
  }

  stopper(): number {
    this.points = this.value;
    return this.points;
  }
<<<<<<< HEAD

=======
  
>>>>>>> e2338841b56ba7e1f3acd0c75468d1c3d5475d37
}