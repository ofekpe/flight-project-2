import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from '../../services/flight.service';

interface Flight {
  flightNumber: string;
  origin: string;
  destination: string;
  boardingDate: string;
  arrivalDate: string;
  numberOfSeats: number;
}

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
  flight: Flight | undefined;

  constructor(private route: ActivatedRoute, private flightService: FlightService) {}

  ngOnInit(): void {
    const flightNumber = this.route.snapshot.paramMap.get('flightNumber');
    if (flightNumber) {
      this.flight = this.flightService.getFlightByNumber(flightNumber);
    }
  }
}