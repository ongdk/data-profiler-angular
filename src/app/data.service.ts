import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpService: HttpClient) { }

  getData(){
	return this.httpService.get('./assets/data.json');
}

  getDbTableNames(){
  	return this.httpService.get('./assets/db_table_names.json');
  }
}
