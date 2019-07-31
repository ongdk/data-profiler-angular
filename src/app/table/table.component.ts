import { Component, OnInit, Input} from '@angular/core';
import { Column, CrossTab } from '../column';

@Component({
  selector: 'cross-tab-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() cross_tab:CrossTab;
  @Input() name:string;
  values: [][];
  row_names:string[];
  col_names:string[];

  constructor() { }

  ngOnInit() {
  	this.append(this.cross_tab)
  }

  append(cross_tab:CrossTab){
  	var values=[];
  	var col=[];
	for (var i in cross_tab.entries) {
	    for (var j in cross_tab.entries[i].series) {
	    	col.push(cross_tab.entries[i].series[j].value);
	    }
	    values.push(col);
	    col=[];
	}
	this.values = values;
	console.log(this.values);
  }

  counter(i: number) {
    return new Array(i);
}
}
