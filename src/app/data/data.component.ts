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

  constructor() {
  }

  ngOnInit() { }

}