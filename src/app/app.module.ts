import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiSwitchModule } from 'ngx-ui-switch';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';

import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas'; 

import { BarChartComponent } from './graphs/bar-chart.component';
import { NumberCardComponent } from './graphs/number-card.component';
import { CrossTabComponent } from './graphs/cross-tab.component';
import { TableComponent } from './graphs/cross-tabs/table/table.component';
import { CrossTabsComponent } from './graphs/cross-tabs/cross-tabs.component';
import { BoxPlotComponent } from './graphs/box-plot/box-plot.component';
import { PageComponent } from './page/page.component';
import { DistPlotComponent } from './graphs/dist-plot/dist-plot.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    BarChartComponent,
    NumberCardComponent,
    CrossTabComponent,
    TableComponent,
    CrossTabsComponent,
    BoxPlotComponent,
    PageComponent,
    DistPlotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    UiSwitchModule,
    TooltipModule.forRoot(),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
