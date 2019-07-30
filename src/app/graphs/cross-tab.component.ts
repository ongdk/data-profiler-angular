import { Component, OnInit, Input} from '@angular/core';
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { Column } from '../column';

@Component({
  selector: 'ngx-cross-tabs',
  template:  `
  <div *ngFor = "let cross_tab of cross_tabs">
    <div class="row"><div class="col-12">
      <ngx-charts-heat-map
        [view]="[730, 400]"
        [results]="cross_tab.entries"
        [legend]="showLegend"
        [gradient]="gradient"
        [xAxis]="showXAxis"
        [yAxis]="showYAxis"
        [showXAxisLabel]="showXAxisLabel"
        [showYAxisLabel]="showYAxisLabel"
        [xAxisLabel]="column.name"
        [yAxisLabel]="cross_tab.against"
        [animations]="animations"
        [scheme] ="scheme"
        (select)="onSelect($event)">
      </ngx-charts-heat-map>
    </div></div>
    <div class="row"><div class="col-12">
      <ngx-charts-bar-vertical-2d
        [view]="[800, 400]" 
        [results]="cross_tab.entries"
        [gradient]="gradient" 
        [xAxis]="showXAxis" 
        [yAxis]="showYAxis" 
        [legend]="showLegend"
        [showXAxisLabel]="showXAxisLabel" 
        [showYAxisLabel]="showYAxisLabel" 
        [xAxisLabel]="xAxisLabel" 
        [yAxisLabel]="yAxisLabel"
        [scheme] ="schemeBar"
        [roundDomains]="roundDomains"
        [noBarWhenZero]="noBarWhenZero"
        (select)="onSelect($event)">
      </ngx-charts-bar-vertical-2d>
    </div></div>
  </div>
  `
})
export class CrossTabComponent implements OnInit {
  @Input() column: Column;

  public cross_tabs: any;
 str:string;
  constructor() { }

  ngOnInit() {
  	this.append(this.column);
  }

  append(column: Column){
  	this.cross_tabs = this.column.stats.cross_tabs;
  }

	// options for the chart
	showXAxis = true;
	showYAxis = true;
	gradient = false;
	showLegend = true;
	showXAxisLabel = true;
	showYAxisLabel = true;
	animations = true;
	scheme ={
  domain: ["#A0DBF2","#0D79A3"]
};

    // options for the chart
  xAxisLabel = 'Values';
  yAxisLabel = 'Counts';
  timeline = true;
  roundDomains=true;
  noBarWhenZero=true;
  schemeBar =   {
    domain: ["#3d8dbd","#72a4c9","#9dbbd4","#c4d3e0","#f3cfbc","#f5b48e","#f39960","#ed7d31"]
  };

  // line, area
  autoScale = true;
}
