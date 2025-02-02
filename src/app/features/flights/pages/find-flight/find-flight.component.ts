import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FlightService } from '../../service/flight.service';
import { Flight } from '../../model/flight.model';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
@Component({
  selector: 'app-find-flight',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, MatSortModule],
  templateUrl: './find-flight.component.html',
  styleUrls: ['./find-flight.component.css'],
})
export class FindFlightComponent implements OnInit {
  displayedColumns: string[] = ['flightNumber', 'origin', 'destination', 'boardingDate', 'arrivalDate', 'numberOfSeats', 'actions'];
  futureFlights: Flight[] = [];
  dataSource: MatTableDataSource<Flight>;

  constructor(private router: Router,private flightService: FlightService) {
    this.flightService.getFlights().forEach(flight => {
      if (flight.boardingDate > new Date()) {
        this.futureFlights.push(flight);

      }
    });
    this.dataSource = new MatTableDataSource(this.futureFlights);
  }
    ngOnInit(): void {};
    bookFlight(flightNumber: string): void {
      this.router.navigate(['/booking-page', flightNumber]);
    }
  
  
  
}