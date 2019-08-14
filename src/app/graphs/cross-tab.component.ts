import { Component, OnInit, Input} from '@angular/core';
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { Column,CrossTab } from '../column';

@Component({
  selector: 'cross-tab',
  template:  `
      <div class="row"><div class="col-12">
        <cross-tab-table [cross_tab]=cross_tab [name]=name></cross-tab-table>
      </div></div>
  `
})
export class CrossTabComponent implements OnInit {
  @Input() cross_tab: CrossTab;
  @Input() name:Column;
  
  constructor() { }

  ngOnInit() {
  }
}
