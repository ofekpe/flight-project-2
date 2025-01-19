import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { FlightService } from '../../service/flight.service';
import { Flight } from '../../model/flight.model';

@Component({
  selector: 'app-manage-flights',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './manage-flights.component.html',
  styleUrls: ['./manage-flights.component.css'],
})
export class ManageFlightsComponent {
  displayedColumns: string[] = [
    'flightNumber',
    'origin',
    'destination',
    'boardingDate',
    'arrivalDate',
    'numberOfSeats',
    'actions',
  ];
  dataSource: Flight[];

  constructor(private router: Router, private flightService: FlightService) {
    this.dataSource = this.flightService.getFlights();
  }

  editFlight(flightNumber: string): void {
    this.router.navigate(['/flight-details', flightNumber]);
  }
}
