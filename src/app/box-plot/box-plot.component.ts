import { Component, OnInit, Input } from '@angular/core';
import { Percentiles } from '../column';
@Component({
  selector: 'box-plot',
  templateUrl: './box-plot.component.html',
  styleUrls: ['./box-plot.component.css']
})
export class BoxPlotComponent implements OnInit {
  @Input() percentiles:Percentiles;
  data: Percentiles[];
  constructor() {
  }

  ngOnInit() {
  	this.data = [this.percentiles];
  }

}
