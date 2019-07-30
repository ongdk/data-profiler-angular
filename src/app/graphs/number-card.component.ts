import { Component, OnInit, Input} from '@angular/core';
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { Column } from "../column";
@Component({
  selector: 'ngx-number-card',
  template: `
  <div class="row"><div class="col-12">
  <ngx-charts-number-card [view]="view" [results]="cards" [scheme]="scheme" (select)="onSelect($event)"></ngx-charts-number-card>
  </div></div>
  `
})
export class NumberCardComponent implements OnInit {
  @Input() column: Column;
  
  cards = [];

  constructor() { }

  ngOnInit() {
  	this.append(this.column);
  }

  append(column: Column){
  	this.cards.push({"name": "Count","value":column.count},
  		{"name": "Missing Data","value":column.invalid_data},
  		{"name": "Valid Data (%)","value":100*(column.count-column.invalid_data)/column.count})
  	if (column.type == 'categorical'){
      this.cards.push({"name": "Number of Categories","value":column.stats.class_count.length});

  	}
  	else if (column.type == 'distinct_code'){
  		this.cards.push({"name": "Code Length","value":column.stats.code_length});
  	}
  }

  view: any[] = [900, 150];
  scheme = {
    domain: ["#3d8dbd"]
  }
}
