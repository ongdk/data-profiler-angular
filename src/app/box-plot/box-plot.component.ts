import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'box-plot',
  templateUrl: './box-plot.component.html',
  styleUrls: ['./box-plot.component.css']
})
export class BoxPlotComponent implements OnInit {
  data=[{
    lower: 1.3,
    q1: 2.15,
    median: 2.95,
    q3: 3.725,
    upper: 4.7,
    mean: 2.9,
    outliers: [1, 9],
    year: '1996'
}, {
    lower: 2,
    q1: 3.825,
    median: 5.45,
    q3: 6.425,
    upper: 8.2,
    mean: 5.2,
    outliers: [1.5, 2, 8.9],
    year: '1997'
}, {
    lower: 3.8,
    q1: 4.725,
    median: 5.55,
    q3: 5.75,
    upper: 8.7,
    mean: 5.5,
    year: '1998'
}, {
    lower: 3,
    q1: 4.375,
    median: 4.95,
    q3: 5.85,
    upper: 8,
    mean: 5.2,
    outliers: [3, 9.5],
    year: '1999'
}]
  constructor() { }

  ngOnInit() {
  }

}
