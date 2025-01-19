import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { DestinationsPageComponent } from './features/destinations/pages/destinations-page/destinations-page.component';
import { ManageDestinationsComponent } from './features/destinations/pages/destinations-page/manage-destinations/manage-destinations.component';
import { MyBookingsComponent } from './features/bookings/pages/my-bookings/my-bookings.component';
import { DestinationDetailsComponent } from './features/destinations/pages/destination-details/destination-details.component';
import { ManageFlightsComponent } from './features/flights/pages/manage-flights/manage-flights.component';
import { FlightDetailsComponent } from './features/flights/pages/features/flights/pages/flight-details/flight-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'destinations', component: DestinationsPageComponent },
  { path: 'manage-destinations', component: ManageDestinationsComponent },
  { path: 'my-bookings', component: MyBookingsComponent },
  { path: 'destination-details/:code', component: DestinationDetailsComponent},
  { path: 'manage-flights', component: ManageFlightsComponent },
  { path: 'flight-details/:flightNumber', component: FlightDetailsComponent },

];
