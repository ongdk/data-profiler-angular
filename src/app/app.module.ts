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
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { BarChartComponent } from './graphs/bar-chart.component';
import { NumberCardComponent } from './graphs/number-card.component';
import { CrossTabComponent } from './graphs/cross-tab.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    BarChartComponent,
    NumberCardComponent,
    CrossTabComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    PinchZoomModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
