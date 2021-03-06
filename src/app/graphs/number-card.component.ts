import { Component, OnInit, Input} from '@angular/core';
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { Column } from "../column";
@Component({
  selector: 'ngx-number-card',
  template: `
  <div class="row"><div class="col-12" [ngClass]="{'small': size=='small','medium':size=='medium','large':size=='large'}">
  <ngx-charts-number-card [results]="cards" [scheme]="scheme" (select)="onSelect($event)"></ngx-charts-number-card>
  </div></div>
  `,
  styles: [`.small{height:200px;}`,`.medium{height:250px;}`,`.large{height:300px;}`]
})
export class NumberCardComponent implements OnInit {
  @Input() column: Column;
  @Input() count: number;
  
  cards = [];
  size: string;

  constructor() {}

  ngOnInit() {
  	this.append(this.column);
  }

  append(column: Column){
  	this.cards.push({"name": "Distinct Count","value":column.count},
  		{"name": "Missing Data","value":column.invalid_data},
  		{"name": `Non "Nan" values (%)`,"value":100*(this.count-column.invalid_data)/this.count})
    switch (column.type) {
      case "categorical":
        this.size ="small";
        this.cards.push({"name": "Number of Categories","value":column.stats.class_count.length});

        break;
      case "distinct_code":
        this.cards.push({"name": "Code Length","value":column.stats.code_length});
        break;
      case "datetime":
        this.size ="medium";
        this.cards.push({"name": "Average Number of Entries","value":column.stats.average_num_ent},
          {"name": "Earliest","value":column.stats.earliest},
          {"name": "Latest","value":column.stats.latest});
        break;
      case "string":
        //do sth
        break;
      case "nominal_numeric":
        this.size ="large";
        this.cards.push({"name": "Count","value":column.stats.numeric_stats.count},
          {"name": "Mean","value":column.stats.numeric_stats.mean},
          {"name": "Standard Deviation","value":column.stats.numeric_stats.stddev},
          {"name": "Min. Value","value":column.stats.numeric_stats.min},
          {"name": "Max. Value","value":column.stats.numeric_stats.max});
        break;
    }
  }

  scheme = {
    domain: ["#3d8dbd"]
  }
}