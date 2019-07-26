import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from './data.service';
import { Data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private dataService: DataService) { }

  data: Data;

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