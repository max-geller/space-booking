import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'booking',
    loadChildren: () => import('./features/booking/booking.module').then(m => m.BookingModule)
  },
  {
    path: 'explore',
    loadChildren: () => import('./features/explore/explore.module').then(m => m.ExploreModule)
  },
  {
    path: 'flights',
    loadChildren: () => import('./features/flights/flights.module').then(m => m.FlightsModule)
  },
  {
    path: 'packages',
    loadChildren: () => import('./features/packages/packages.module').then(m => m.PackagesModule)
  },
  {
    path: 'deals',
    loadChildren: () => import('./features/deals/deals.module').then(m => m.DealsModule)
  },
  {
    path: 'trips',
    loadChildren: () => import('./features/trips/trips.module').then(m => m.TripsModule)
  },
  {
    path: 'hotels',
    loadChildren: () => import('./features/hotels/hotels.module').then(m => m.HotelsModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
