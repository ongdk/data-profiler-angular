import { Component, OnInit, Input} from '@angular/core';
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { Column } from '../column';

@Component({
  selector: 'ngx-bar-chart',
  template: `
  <!--h2>Counts of categories</h2>
  <div class="row"><div class="col-12">
  <pinch-zoom [zoom-button]=true [double-tap]=true style="align-items: left">
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
    [noBarWhenZero]="noBarWhenZero"
    [scheme]="scheme"
    (select)="onSelect($event)">
  </ngx-charts-bar-vertical>
  </pinch-zoom>
  </div></div-->

  <div class="row"><div class="col-12" style="overflow:hidden;">
    <kendo-chart renderAs="canvas" [pannable]="true" [zoomable]="true" [categoryAxis]="categoryAxis" [valueAxis]="valueAxis">
      <kendo-chart-title text="Column Categories">
      </kendo-chart-title>
      <kendo-chart-area background="white" [margin]="0" [height]="300">
      </kendo-chart-area>
      <kendo-chart-series>
        <kendo-chart-series-item 
            type="column" [data]="results"
            field="value" categoryField="name" [gap]="1" colorField="green">
          <kendo-chart-series-item-tooltip background="green">
          </kendo-chart-series-item-tooltip>
        </kendo-chart-series-item>
      </kendo-chart-series>
    </kendo-chart>
  </div></div>

`, styles: [`.k-tooltip { width: auto ;}`]})


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

  view: any[] = [800, 400];

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Categories of current column';
  showYAxisLabel = true;
  yAxisLabel = 'Counts';
  timeline = true;
  noBarWhenZero=true;

  scheme =   {
    domain: ["#3d8dbd"]
  };

  // line, area
  autoScale = true;
}
