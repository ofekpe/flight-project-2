import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FindFlightComponent } from '../flights/pages/find-flight/find-flight.component';
import { LastMinuteFlightsComponent } from '../flights/pages/last-minute-flights/last-minute-flights.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatListModule, MatButtonModule, FindFlightComponent, LastMinuteFlightsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  items = [
    { name: 'Flight 1', imageUrl: 'assets/flight1.jpg', link: '/book/flight1' },
    { name: 'Flight 2', imageUrl: 'assets/flight2.jpg', link: '/book/flight2' },
    { name: 'Flight 3', imageUrl: 'assets/flight3.jpg', link: '/book/flight3' },
  ];
}
