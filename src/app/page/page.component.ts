import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../data.service';
import { Data } from '../data';
import { DbTableNames, Table } from '../db_table_names';
import { Column } from '../column';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas';  

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  data: Data;
  data_table_names: DbTableNames;

  dbString: string;
  tableString: string;
  colString: string;
  selectedDb: DbTableNames;
  selectedCol: Column;

  error:string;

  constructor(
  	private dataService: DataService,
  	private route: ActivatedRoute,
  	private location: Location
 ) {}

  ngOnInit() {
  	this.dbString = this.route.snapshot.paramMap.get('db');
  	this.tableString=this.route.snapshot.paramMap.get('table');
  	this.colString=this.route.snapshot.paramMap.get('col');
  	this.getDbTableNames();
  	//this.getData();
  	if(this.tableString){this.getDataTemp(this.tableString)};
  }

  getDbTableNames(): void{
    this.dataService.getDbTableNames().subscribe(
    data => {
      this.data_table_names = data as DbTableNames;
	  	if(this.dbString){
	  		for (var i in this.data_table_names){
	  			if (this.data_table_names[i].name == this.dbString){
	  				this.selectedDb = this.data_table_names[i];
	  			};
	  		};
	  		if ( !this.selectedDb){ this.error="Database with name '"+this.dbString+"' does not exist."};
  	}
  	if (!this.dbString){ this.dbString = 'Select a Database';
  	this.tableString='Select a Table'};
    },
    (err: HttpErrorResponse) => {
      console.log(err.message);
     }
    );
  }
  setDb(db: DbTableNames){
    this.selectedDb = db;
    this.dbString = db.name;
    this.tableString= 'Select a Table';
  }
  setTable(table_name: string){
  	this.error='';
    this.selectedCol=null;
    this.colString=null;
    this.getTable(this.selectedDb.name, table_name);
    this.tableString = table_name;
  }
  getTable(dbName: string, tableName: string){
    //API call. Put corresponding table at asset/data.JSON
    this.data=null;
    //this.getData();
    this.getDataTemp(tableName);
  }
  getData(): void{
    this.dataService.getData().subscribe(
    data => {
      this.data = data as Data;
      if(this.colString){
        if (this.colString!="stats"){
          for (var i in this.data.columns){
            if (this.data.columns[i].name == this.colString){
              this.selectedCol = this.data.columns[i];
            };
          };
          if ( !this.selectedCol){ this.error="Column with name '"+this.colString+"' does not exist in table '"+this.tableString+" '."};
        }
        else{this.selectedCol=null};
    };
    },
    (err: HttpErrorResponse) => {
      console.log(err.message);
      this.data=null;
      this.error=err.message;
     }
    );
  }
  getDataTemp(table:string){
    this.dataService.getDataTemp(table).subscribe(
    data => {
        this.data = data as Data;
	  	if(this.colString){
	  		if (this.colString!="stats"){
		  		for (var i in this.data.columns){
		  			if (this.data.columns[i].name == this.colString){
		  				this.selectedCol = this.data.columns[i];
		  			};
		  		};
	  			if ( !this.selectedCol){ this.error="Column with name '"+this.colString+"' does not exist in table '"+this.tableString+" '."};
	    	}
	    	else{this.selectedCol=null};
		};
	},
    (err: HttpErrorResponse) => {
      console.log(err.message);
      this.data=null;
      this.error=err.message;
     }
    );
  }
  setCol(column: Column){
  	this.error="";
    this.selectedCol = column;
    this.colString = column.name;
  }
  dispStat(){
    this.colString = "stats";
    this.selectedCol=null;
  }

  captureScreen(){
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save(this.tableString+'_'+this.colString+'.pdf'); // Generated PDF
    });  
  }
}
