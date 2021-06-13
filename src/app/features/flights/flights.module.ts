import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightsRoutes } from './flights.routes';
import { FlightsComponent } from './pages/flights.component';


@NgModule({
  declarations: [
    FlightsComponent
  ],
  imports: [
    CommonModule,
    FlightsRoutes
  ]
})
export class FlightsModule { }
