import { Component, OnInit, Input} from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit{
  @Input() data: Data;

  constructor() {
  }

  ngOnInit() { }

}