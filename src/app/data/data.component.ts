import { Component, OnInit, Input} from '@angular/core';
import { Data } from '../data';
import { Column } from '../column';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit{
  @Input() data: Data;
  @Input() selectedCol: Column;


  cards = [];

  constructor() { }

  ngOnInit() {
  this.append(this.data);
}

  append(data: Data){
  	var count = 0;
  	var cat_count=0;
  	var dist_cde_count=0;
	for (var i in data.columns) {
	    switch (data.columns[i].type) {
	    	case "distinct_code":
	    		dist_cde_count+=1;
	    		break;
	    	case "categorical":
	    		cat_count+=1;
	    		break;
	    	}
	    count+=1;
	};
	console.log([count,cat_count,dist_cde_count]);
  this.cards.push({"name": "Column Count","value":count},
  	{"name": "Distinct Code Count","value":dist_cde_count},
  	{"name": "Categorical","value": cat_count});
	console.log(this.cards);
  }
  view: any[] = [900, 150];
  scheme = {
    domain: ["#3d8dbd"]
  }
}