import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { UiSwitchModule } from 'ngx-ui-switch';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';


import { BarChartComponent } from './graphs/bar-chart.component';
import { NumberCardComponent } from './graphs/number-card.component';
import { CrossTabComponent } from './graphs/cross-tab.component';
import { TableComponent } from './table/table.component';
import { CrossTabsComponent } from './cross-tabs/cross-tabs.component';
import { BoxPlotComponent } from './box-plot/box-plot.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    BarChartComponent,
    NumberCardComponent,
    CrossTabComponent,
    TableComponent,
    CrossTabsComponent,
    BoxPlotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    PinchZoomModule,
    UiSwitchModule,
    TooltipModule.forRoot(),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
