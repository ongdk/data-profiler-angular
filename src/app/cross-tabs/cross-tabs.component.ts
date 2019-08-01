import { Component, OnInit, Input} from '@angular/core';
import { CrossTab } from '../column';

@Component({
  selector: 'cross-tabs',
  templateUrl: './cross-tabs.component.html',
  styleUrls: ['./cross-tabs.component.css']
})
export class CrossTabsComponent implements OnInit {
  @Input() cross_tabs: CrossTab[];
  @Input() name:string;

  constructor() { }

  ngOnInit() {
  }

}
