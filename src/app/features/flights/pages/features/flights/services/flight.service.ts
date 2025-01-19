import { Injectable } from '@angular/core';

interface Flight {
  flightNumber: string;
  origin: string;
  destination: string;
  boardingDate: string;
  arrivalDate: string;
  numberOfSeats: number;
}

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private flights: Flight[] = [
    {
      flightNumber: 'ATL001',
      origin: 'Atlanta',
      destination: 'Larnaca',
      boardingDate: '2023-10-01',
      arrivalDate: '2023-10-02',
      numberOfSeats: 150,
    },
    {
      flightNumber: 'LCA002',
      origin: 'Larnaca',
      destination: 'Atlanta',
      boardingDate: '2023-10-03',
      arrivalDate: '2023-10-04',
      numberOfSeats: 150,
    },
    {
      flightNumber: 'TLV003',
      origin: 'Tel Aviv',
      destination: 'San Francisco',
      boardingDate: '2023-10-05',
      arrivalDate: '2023-10-06',
      numberOfSeats: 200,
    },
    {
      flightNumber: 'SFO004',
      origin: 'San Francisco',
      destination: 'Tel Aviv',
      boardingDate: '2023-10-07',
      arrivalDate: '2023-10-08',
      numberOfSeats: 200,
    },
    {
      flightNumber: 'NRT005',
      origin: 'Tokyo',
      destination: 'Sydney',
      boardingDate: '2023-10-09',
      arrivalDate: '2023-10-10',
      numberOfSeats: 180,
    },
    {
      flightNumber: 'SYD006',
      origin: 'Sydney',
      destination: 'Tokyo',
      boardingDate: '2023-10-11',
      arrivalDate: '2023-10-12',
      numberOfSeats: 180,
    },
    {
      flightNumber: 'FRA007',
      origin: 'Frankfurt',
      destination: 'Los Angeles',
      boardingDate: '2023-10-13',
      arrivalDate: '2023-10-14',
      numberOfSeats: 220,
    },
    {
      flightNumber: 'LAX008',
      origin: 'Los Angeles',
      destination: 'Frankfurt',
      boardingDate: '2023-10-15',
      arrivalDate: '2023-10-16',
      numberOfSeats: 220,
    },
    {
      flightNumber: 'DXB009',
      origin: 'Dubai',
      destination: 'New York',
      boardingDate: '2023-10-17',
      arrivalDate: '2023-10-18',
      numberOfSeats: 250,
    },
    {
      flightNumber: 'JFK010',
      origin: 'New York',
      destination: 'Dubai',
      boardingDate: '2023-10-19',
      arrivalDate: '2023-10-20',
      numberOfSeats: 250,
    },
  ];

  getFlights(): Flight[] {
    return this.flights;
  }

  getFlightByNumber(flightNumber: string): Flight | undefined {
    return this.flights.find(flight => flight.flightNumber === flightNumber);
  }
}