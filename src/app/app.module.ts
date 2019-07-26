import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BarChartComponent } from './graphs/bar-chart.component';
import { NumberCardComponent } from './graphs/number-card.component';
import { HeatMapComponent } from './graphs/heat-map.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    BarChartComponent,
    NumberCardComponent,
    HeatMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
