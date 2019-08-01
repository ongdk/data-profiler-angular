import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import { CrossTab } from '../column';

@Component({
  selector: 'cross-tabs',
  templateUrl: './cross-tabs.component.html',
  styleUrls: ['./cross-tabs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CrossTabsComponent implements OnInit {
  @Input() cross_tabs: CrossTab[];
  @Input() name:string;

  constructor() { }

  ngOnInit() {
  }

}
