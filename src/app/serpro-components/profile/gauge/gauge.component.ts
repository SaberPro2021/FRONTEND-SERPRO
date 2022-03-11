import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';


@Component({
  selector: 'serpro-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {

  chartOptions : EChartsOption = {
    series: [
      {
        type: 'gauge',
        radius : 75,
        axisLine: {
          lineStyle: {
            width: 20,
            color: [
              [0.60, '#fd666d'],
              [0.80, '#ffff00'],
              [1, '#0cc03c']
            ]
          }
        },
        pointer: {
          itemStyle: {
            color: '#000000'
          }
        },
        axisTick: {
          distance: -20,
          length: 8,
          lineStyle: {
            color: '#fff',
            width: 2
          }
        },
        splitLine: {
          distance: -20,
          length: 20,
          lineStyle: {
            color: '#fff',
            width: 3
          }
        },
        axisLabel: {
          color: 'auto',
          distance: 24,
          fontSize: 8
        },
        detail: {
          valueAnimation: true,
          formatter: '{value} Puntos',
          fontSize: 8,
          color: '#000000'
        },
        data: [
          {
            value: Math.floor(Math.random() * 10) + 90
          }
        ]
      }
    ]
  };

  constructor() {
   }

  ngOnInit(): void {    
  }

}
