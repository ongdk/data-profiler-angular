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
  values: number[][];
  max:number;
  min:number;

  checked=false;

  constructor() { }

  ngOnInit() {
  	this.append(this.cross_tab)
  }

  append(cross_tab:CrossTab){
  	var values: number[][]=[];
  	var col:number[] =[];
    var value: number;
    var max: number;
    var min: number;
	for (var i in cross_tab.entries) {
	    for (var j in cross_tab.entries[i].series) {
        value = cross_tab.entries[i].series[j].value;
	    	col.push(value);
        if (max==null || value>max){
          max = value;
        }
        if (min==null || value<min){
          min = value;
        }
	    }
	    values.push(col);
	    col=[];
	}
	this.values = values;
  this.max = max;
  this.min = min;
  }

  toggle(){
    this.checked= !this.checked;
    console.log(this.checked);
  }
}
