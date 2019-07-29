import { Component, OnInit, Input} from '@angular/core';
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { Column } from '../column';

@Component({
  selector: 'ngx-bar-chart',
  template: `
  <div class="row"><div class="col-12">
  <ngx-charts-bar-vertical
    [view]="view" 
    [results]="results"
    [gradient]="gradient" 
    [xAxis]="showXAxis" 
    [yAxis]="showYAxis" 
    [legend]="showLegend" 
    [showXAxisLabel]="showXAxisLabel" 
    [showYAxisLabel]="showYAxisLabel" 
    [xAxisLabel]="xAxisLabel" 
    [yAxisLabel]="yAxisLabel" 
    (select)="onSelect($event)">
  </ngx-charts-bar-vertical>
  </div></div>

`})
export class BarChartComponent implements OnInit {
	@Input() column: Column;

  public results= [];
  str: string;
  constructor() { }

  ngOnInit() {
  	this.appendCat(this.column);
  }

  appendCat(column: Column){
    this.results = column.stats.class_count;
  }

  view: any[] = [700, 400];

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Values';
  showYAxisLabel = true;
  yAxisLabel = 'Counts';
  timeline = true;

  // line, area
  autoScale = true;
}
