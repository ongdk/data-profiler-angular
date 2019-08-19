import { Component, OnInit, Input } from '@angular/core';
import { Percentiles } from '../column';
@Component({
  selector: 'box-plot',
  templateUrl: './box-plot.component.html',
  styleUrls: ['./box-plot.component.css']
})
export class BoxPlotComponent implements OnInit {
  @Input() percentiles:number[];
  @Input() mean:number;
  data: Percentiles[];
  constructor() {
  }

  ngOnInit() {
  	this.data = [
    {
        "lower": this.percentiles[1],
        "q1": this.percentiles[2],
        "median": this.percentiles[5],
        "q3": this.percentiles[7],
        "upper": this.percentiles[9],
        "mean": this.mean,
        "outliers": [this.percentiles[0], this.percentiles[10]],
    }];
  }

}
