import { Injectable } from '@angular/core';
import { Flight } from '../model/flight.model';
@Injectable({
  providedIn: 'root',
})
export class FlightService {
  private flights: Flight[] = [
    {
      flightNumber: 'ATL001',
      origin: 'Atlanta',
      destination: 'Larnaca',
      boardingDate: new Date('2025-10-01'),
      arrivalDate: new Date('2025-10-02'),
      numberOfSeats: 150,
    },
    {
      flightNumber: 'LCA002',
      origin: 'Larnaca',
      destination: 'Atlanta',
      boardingDate: new Date('2025-1-03'),
      arrivalDate: new Date('2025-1-04'),
      numberOfSeats: 150,
    },
    {
      flightNumber: 'TLV003',
      origin: 'Tel Aviv',
      destination: 'San Francisco',
      boardingDate: new Date('2023-10-05'),
      arrivalDate: new Date('2023-10-06'),
      numberOfSeats: 200,
    },
    {
      flightNumber: 'SFO004',
      origin: 'San Francisco',
      destination: 'Tel Aviv',
      boardingDate: new Date('2023-10-07'),
      arrivalDate: new Date('2023-10-08'),
      numberOfSeats: 200,
    },
    {
      flightNumber: 'NRT005',
      origin: 'Tokyo',
      destination: 'Sydney',
      boardingDate: new Date('2023-10-09'),
      arrivalDate: new Date('2023-10-10'),
      numberOfSeats: 180,
    },
    {
      flightNumber: 'SYD006',
      origin: 'Sydney',
      destination: 'Tokyo',
      boardingDate: new Date('2023-10-11'),
      arrivalDate: new Date('2023-10-12'),
      numberOfSeats: 180,
    },
    {
      flightNumber: 'FRA007',
      origin: 'Frankfurt',
      destination: 'Los Angeles',
      boardingDate: new Date('2023-10-13'),
      arrivalDate: new Date('2023-10-14'),
      numberOfSeats: 220,
    },
    {
      flightNumber: 'LAX008',
      origin: 'Los Angeles',
      destination: 'Frankfurt',
      boardingDate: new Date('2023-10-15'),
      arrivalDate: new Date('2023-10-16'),
      numberOfSeats: 220,
    },
    {
      flightNumber: 'DXB009',
      origin: 'Dubai',
      destination: 'New York',
      boardingDate: new Date('2023-10-17'),
      arrivalDate: new Date('2023-10-18'),
      numberOfSeats: 250,
    },
    {
      flightNumber: 'JFK010',
      origin: 'New York',
      destination: 'Dubai',
      boardingDate: new Date('2023-10-19'),
      arrivalDate: new Date('2023-10-20'),
      numberOfSeats: 250,
    },
  ];

  getFlights(): Flight[] {
    return this.flights;
  }

  getFlightByNumber(flightNumber: string): Flight | undefined {
    return this.flights.find((flight) => flight.flightNumber === flightNumber);
  }
}
