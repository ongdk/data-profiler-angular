import { Component, OnInit, Input} from '@angular/core';
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { Column } from '../column';

@Component({
  selector: 'ngx-bar-chart',
  template: `
  <div class="row"><div class="col-12">
    <kendo-chart renderAs="canvas" [pannable]="true" [zoomable]="true" [categoryAxis]="categoryAxis" [valueAxis]="valueAxis">
      <kendo-chart-area background="transparent" [margin]="0" [height]="300">
      </kendo-chart-area>
      <kendo-chart-value-axis>
        <kendo-chart-value-axis-item [title]="{ text: 'Counts' }">
        </kendo-chart-value-axis-item>
      </kendo-chart-value-axis>
      <kendo-chart-category-axis>
        <kendo-chart-category-axis-item [categories]="name" [title]="{ text: 'Column Categories' }" [labels]="{ rotation: 'auto' }">
        </kendo-chart-category-axis-item>
      </kendo-chart-category-axis>
      <kendo-chart-series>
        <kendo-chart-series-item 
            type="column" [data]="results"
            field="value" categoryField="name" [gap]="1" color="#3d8dbd">
          <kendo-chart-series-item-tooltip background="#3d8dbd">
          </kendo-chart-series-item-tooltip>
        </kendo-chart-series-item>
      </kendo-chart-series>
    </kendo-chart>
  </div></div>
  <p>Tip: SHIFT + Mouse Drag zoom into specific region.
  Use the mousewheel to zoom in and out</p>

`, styles: []
})


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
