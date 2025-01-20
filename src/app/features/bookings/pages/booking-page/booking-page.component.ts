import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flight } from '../../../flights/model/flight.model';
import { FlightService } from '../../../flights/service/flight.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-booking-page',
  imports: [CommonModule],
  templateUrl: './booking-page.component.html',
  styleUrl: './booking-page.component.css',
})
export class BookingPageComponent {
  flight: Flight | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService
  ) {}

  ngOnInit(): void {
    const flightNumber = this.route.snapshot.paramMap.get('flightNumber');
    if (flightNumber) {
      this.flight = this.flightService.getFlightByNumber(flightNumber);
    }
  }
}
