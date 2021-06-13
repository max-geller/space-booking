import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripsRoutingModule } from './trips-routing.module';
import { TripsComponent } from './trips.component';


@NgModule({
  declarations: [
    TripsComponent
  ],
  imports: [
    CommonModule,
    TripsRoutingModule
  ]
})
export class TripsModule { }
