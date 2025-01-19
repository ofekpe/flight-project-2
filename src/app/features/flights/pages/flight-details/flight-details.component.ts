import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from '../../service/flight.service';
import { CommonModule } from '@angular/common';
import { Flight } from '../../model/flight.model';

@Component({
  selector: 'app-flight-details',
  imports: [CommonModule],
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css'],
})
export class FlightDetailsComponent implements OnInit {
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
