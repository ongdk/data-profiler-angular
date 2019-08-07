import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from './data.service';
import { Data } from './data';
import { DbTableNames, Table } from './db_table_names';
import { Column } from './column';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {

  constructor(private dataService: DataService) { }

  data: Data;
  data_table_names: DbTableNames;
  str: string;
  selectedDb: DbTableNames;
  selectedCol: Column = null;

  error:string;

  dbString: string = 'Select a Database';
  tableString: string = 'Select a Table';

  ngOnInit() {
    this.getDbTableNames();
  }

  getData(): void{
    this.dataService.getData().subscribe(
    data => {
      this.data = data as Data;
      this.dispStat();
    },
    (err: HttpErrorResponse) => {
      console.log(err.message);
     }
    );
  }

  getDbTableNames(): void{
    this.dataService.getDbTableNames().subscribe(
    data => {
      this.data_table_names = data as DbTableNames;
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

  setTable(table: Table){
    this.tableString = table.name;
    this.getTable(this.selectedDb.name, table.name);
  }

  getTable(dbName: string, tableName: string){
    //API call. Put corresponding table at asset/data.JSON
    this.data=null;
    console.log("fetching Database: "+dbName+" , Table: "+ tableName);
    this.getDataTemp(tableName);
  }

  getDataTemp(table:string){
    this.dataService.getDataTemp(table).subscribe(
    data => {
      this.data = data as Data;
      this.dispStat();
    },
    (err: HttpErrorResponse) => {
      console.log(err.message);
      this.data=null;
      this.error=err.message;
     }
    );
  }

  setCol(column: Column){
    this.selectedCol = column;
  }

  dispStat(){
    this.selectedCol = null;
  }
}