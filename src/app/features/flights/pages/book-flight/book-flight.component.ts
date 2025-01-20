import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FlightService } from '../../service/flight.service';
import { RouterLink,Router } from '@angular/router';
import { Flight } from '../../model/flight.model';


@Component({
  selector: 'app-book-flight',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, MatSortModule],
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css'],
})
export class BookFlightComponent implements OnInit {
  displayedColumns: string[] = [
    'flightNumber',
    'origin',
    'destination',
    'boardingDate',
    'arrivalDate',
    'numberOfSeats',
    'actions',
  ];
  dataSource: MatTableDataSource<Flight>;
  constructor(private router: Router ,private flightService: FlightService) {
    this.dataSource = new MatTableDataSource(this.flightService.getFlights());
  }

  ngOnInit(): void {}

  bookFlight(flightNumber: string): void {
    this.router.navigate(['/booking-page', flightNumber]);
  }
}
