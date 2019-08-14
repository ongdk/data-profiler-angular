import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../data';
import { Column } from '../column';

@Component({
  selector: 'print-out',
  templateUrl: './print-out.component.html',
  styleUrls: ['./print-out.component.css']
})
export class PrintOutComponent implements OnInit {
  @Input() data:Data;
  @Input() selectedCol:Column;
  cards = [];
  pie = [];

  constructor() { }

  ngOnInit() {
  console.log(this.data.columns);
  this.append(this.data);
}

  append(data: Data){
  	var count = 0;
  	var cat_count=0;
  	var dist_cde_count=0;
  	var str_count=0;
  	var datetime_count=0;
  	var num_count=0;
	for (var i in data.columns) {
	    switch (data.columns[i].type) {
	    	case "distinct_code":
	    		dist_cde_count+=1;
	    		break;
	    	case "categorical":
	    		cat_count+=1;
	    		break;
	    	case "string":
	    		str_count+=1;
	    		break;
	    	case "datetime":
	    		datetime_count+=1;
	    		break;
	    	case "nominal_numeric":
	    		num_count+=1;
	    		break;
	    	}
	    count+=1;
	};
  this.cards.push({"name": "Column Count","value":count},
  	{"name": "Distinct Code","value":dist_cde_count},
  	{"name": "Categorical","value": cat_count},
  	{"name": "Datetime","value": datetime_count},
  	{"name": "String","value": str_count},
  	{"name": "Nominal Numeric","value": num_count});
  this.pie.push({"name": "Distinct Code","value":dist_cde_count},
  	{"name": "Categorical","value": cat_count},
  	{"name": "Datetime","value": datetime_count},
  	{"name": "String","value": str_count},
  	{"name": "Nominal Numeric","value": num_count});
}

  view: any[] = [900, 300];
  scheme = {
    domain: ["#3d8dbd"]
  }

  schemePie =   {
    domain: ["#3d8dbd","#9dbbd4","#c4d3e0","#f3cfbc","#f5b48e","#f39960"]
  };

}
