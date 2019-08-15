import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dist-plot',
  templateUrl: './dist-plot.component.html',
  styleUrls: ['./dist-plot.component.css']
})
export class DistPlotComponent implements OnInit {
  @Input() percentiles:number[];
  series: number[][]=[];

  constructor() { }

  ngOnInit() {
  	this.append();
  }

  append(){
  	var diff = (this.percentiles[10]-this.percentiles[0])*0.1;
  	for (var i = 0; i<10; i++){
  		var lower = this.percentiles[i];
  		var higher = this.percentiles[i+1];
  		this.series.push([(higher+lower)*0.5,diff/(higher-lower)]);
  	}
    console.log(this.series);
  }

}
