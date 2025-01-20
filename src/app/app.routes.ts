import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { DestinationsPageComponent } from './features/destinations/pages/destinations-page/destinations-page.component';
import { ManageDestinationsComponent } from './features/destinations/pages/destinations-page/manage-destinations/manage-destinations.component';
import { MyBookingsComponent } from './features/bookings/pages/my-bookings/my-bookings.component';
import { DestinationDetailsComponent } from './features/destinations/pages/destination-details/destination-details.component';
import { ManageFlightsComponent } from './features/flights/pages/manage-flights/manage-flights.component';
import { FlightDetailsComponent } from './features/flights/pages/flight-details/flight-details.component';
import { FindFlightComponent } from './features/flights/pages/find-flight/find-flight.component';
import { LastMinuteFlightsComponent } from './features/flights/pages/last-minute-flights/last-minute-flights.component';
import { BookFlightComponent } from './features/flights/pages/book-flight/book-flight.component';
import { BookingPageComponent } from './features/bookings/pages/booking-page/booking-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'destinations', component: DestinationsPageComponent },
  { path: 'manage-destinations', component: ManageDestinationsComponent },
  { path: 'my-bookings', component: MyBookingsComponent },
  { path: 'destination-details/:code', component: DestinationDetailsComponent },
  { path: 'manage-flights', component: ManageFlightsComponent },
  { path: 'flight-details/:flightNumber', component: FlightDetailsComponent },
  { path: 'find-flight', component: FindFlightComponent },
  { path: 'last-minute-flights', component: LastMinuteFlightsComponent },
  { path: 'book-flight', component: BookFlightComponent },
  { path: 'booking-page/:flightNumber', component: BookingPageComponent },
];
