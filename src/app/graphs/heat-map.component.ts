import { Component, OnInit, Input} from '@angular/core';
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { Column } from '../column';

@Component({
  selector: 'ngx-heat-map',
  template:  `
  <div *ngFor = "let heatmap of heatmaps">
    <div>
      <ngx-charts-heat-map
        [view]="view"
        [results]="heatmap.entries"
        [legend]="showLegend"
        [gradient]="gradient"
        [xAxis]="showXAxis"
        [yAxis]="showYAxis"
        [showXAxisLabel]="showXAxisLabel"
        [showYAxisLabel]="showYAxisLabel"
        [xAxisLabel]="column.name"
        [yAxisLabel]="heatmap.against"
        [animations]="animations"
        [scheme] ="colorScheme"
        [legendPosition]="right"
        (select)="onSelect($event)">
      </ngx-charts-heat-map>
    </div>
    <!--div>
      <ngx-charts-bar-vertical-2d
        [view]="view" 
        [results]="heatmap.entries"
        [gradient]="gradient" 
        [xAxis]="showXAxis" 
        [yAxis]="showYAxis" 
        [legend]="showLegend" 
        [showXAxisLabel]="showXAxisLabel" 
        [showYAxisLabel]="showYAxisLabel" 
        [xAxisLabel]="xAxisLabel" 
        [yAxisLabel]="yAxisLabel"
        [scheme]="colorScheme"
        [roundDomains]="roundDomains"
        [noBarWhenZero]="noBarWhenZero"
        [legendPosition]="right"
        (select)="onSelect($event)">
      </ngx-charts-bar-vertical-2d>
    </div-->
  </div>
  `
})
export class HeatMapComponent implements OnInit {
  @Input() column: Column;

  public heatmaps: any;
 str:string;
  constructor() { }

  ngOnInit() {
  	this.append(this.column);
  }

  append(column: Column){
  	this.heatmaps = this.column.stats.cross_tabs;
  }

    view: any[] = [700, 400];

	// options for the chart
	showXAxis = true;
	showYAxis = true;
	gradient = false;
	showLegend = true;
	showXAxisLabel = true;
	showYAxisLabel = true;
	animations = true;
	scheme ='aqua';

    // options for the chart
  xAxisLabel = 'Values';
  yAxisLabel = 'Counts';
  timeline = true;
  roundDomains=true;
  noBarWhenZero=true

  // line, area
  autoScale = true;
}
