import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dist-plot',
  templateUrl: './dist-plot.component.html',
  styleUrls: ['./dist-plot.component.css']
})
export class DistPlotComponent implements OnInit {
  @Input() percentiles:number[];
  @Input() mean: number;
  series: number[][]=[];
  median: number;
  public notesConfig: {};

  constructor() { }

  ngOnInit() {
  	this.append();
  	this.median = this.percentiles[5];
  }

  append(){
  	var diff = (this.percentiles[10]-this.percentiles[0])*0.1;
  	for (var i = 0; i<10; i++){
  		var lower = this.percentiles[i];
  		var higher = this.percentiles[i+1];
  		this.series.push([(higher+lower)*0.5,diff/(higher-lower)]);
  	}
	this.notesConfig = {
	  data: [{
	      value: this.mean,
	      label:{
	      	text:"Mean",
	      	color:'#3d8dbd',
	      	position: 'outside'
	      },
	      line: {
		    color: '#3d8dbd',
		    length: 282,
		    width: 2
		  }
	    }, {
	      value: this.percentiles[5],
	      label:{
	      	text:"Median",
	      	color:'#3d8dbd',
	      	position: 'outside'
	      },
	      line: {
		    color: '#3d8dbd',
		    dashType: 'dash',
		    length: 282,
		    width: 2
		  }},{
	      value: this.percentiles[2],
	      label:{
	      	text:"Q1",
	      	color:'#3d8dbd',
	      	position: 'outside'
	      },
	      line: {
		    color: '#3d8dbd',
		    dashType: 'dot',
		    length: 282,
		    width: 2
		  }},{
	      value: this.percentiles[7],
	      label:{
	      	text:"Q3",
	      	color:'#3d8dbd',
	      	position: 'outside'
	      },
	      line: {
		    color: '#3d8dbd',
		    dashType: 'dot',
		    length: 282,
		    width: 2
		  }
	    }],
	  position: "top"
	};
  }
}
