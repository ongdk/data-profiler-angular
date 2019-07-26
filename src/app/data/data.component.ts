import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../data.service';
import { Data } from '../data';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(private dataService: DataService) { }

  data: Data;
  title = 'Title';

  ngOnInit() {
    this.getData();
  }

  getData(): void{
    this.dataService.getData().subscribe(
    data => {
      this.data = data as Data;
    },
    (err: HttpErrorResponse) => {
      console.log(err.message);
     }
    );
  }
}