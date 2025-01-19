import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface Destination {
  code: string;
  name: string;
  airportName: string;
  airportUrl: string;
  imageUrl: string;
  email: string;
}

@Component({
  selector: 'app-manage-destinations',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './manage-destinations.component.html',
  styleUrls: ['./manage-destinations.component.css'],
})
export class ManageDestinationsComponent {
  displayedColumns: string[] = ['code', 'name', 'airportName', 'airportUrl', 'imageUrl', 'email', 'actions'];
  dataSource: Destination[] = [
    {
      code: 'ATL',
      name: 'Atlanta',
      airportName: 'Hartsfield-Jackson Atlanta International Airport',
      airportUrl: 'https://www.atl.com/',
      imageUrl: '../assets/ATL.jpg',
      email: 'info@atl.com',
    },
    {
      code: 'LCA',
      name: 'Larnaca',
      airportName: 'Larnaca International Airport',
      airportUrl: 'https://www.hermesairports.com/',
      imageUrl: '../assets/LCA.jpeg',
      email: 'info@larnaca-airport.com',
    },
    {
      code: 'TLV',
      name: 'Tel Aviv',
      airportName: 'Ben Gurion Airport',
      airportUrl: 'https://www.iaa.gov.il/en/',
      imageUrl: '../assets/TLV.jpg',
      email: 'info@ben-gurion.com',
    },
    {
      code: 'SFO',
      name: 'San Francisco',
      airportName: 'San Francisco International Airport',
      airportUrl: 'https://www.flysfo.com/',
      imageUrl: '../assets/SFO.jpg',
      email: 'info@flysfo.com',
    },
    {
      code: 'NRT',
      name: 'Tokyo',
      airportName: 'Narita International Airport',
      airportUrl: 'https://www.narita-airport.jp/en/',
      imageUrl: '../assets/NRT.jpeg',
      email: 'contact@narita-airport.jp',
    },
    {
      code: 'SYD',
      name: 'Sydney',
      airportName: 'Sydney Kingsford Smith Airport',
      airportUrl: 'https://www.sydneyairport.com.au/',
      imageUrl: '../assets/SYD.jpg',
      email: 'support@sydneyairport.com.au',
    },
    {
      code: 'FRA',
      name: 'Frankfurt',
      airportName: 'Frankfurt Airport',
      airportUrl: 'https://www.frankfurt-airport.com/',
      imageUrl: '../assets/FRA.jpg',
      email: 'help@frankfurt-airport.com',
    },
    {
      code: 'LAX',
      name: 'Los Angeles',
      airportName: 'Los Angeles International Airport',
      airportUrl: 'https://www.flylax.com/',
      imageUrl: '../assets/LAX.jpeg',
      email: 'info@flylax.com',
    },
    {
      code: 'DXB',
      name: 'Dubai',
      airportName: 'Dubai International Airport',
      airportUrl: 'https://www.dubaiairports.ae/',
      imageUrl: '../assets/DXB.png',
      email: 'help@dubai-airports.ae',
    },
    {
      code: 'JFK',
      name: 'New York',
      airportName: 'John F. Kennedy International Airport',
      airportUrl: 'https://www.jfkairport.com/',
      imageUrl: '../assets/JFK.jpeg',
      email: 'contact@jfkairport.com',
    },
    {
      code: 'LHR',
      name: 'London',
      airportName: 'Heathrow Airport',
      airportUrl: 'https://www.heathrow.com/',
      imageUrl: '../assets/LHR.jpeg',
      email: 'support@heathrow.com',
    },
    {
      code: 'CDG',
      name: 'Paris',
      airportName: 'Charles de Gaulle Airport',
      airportUrl: 'https://www.parisaeroport.fr/en',
      imageUrl: '../assets/CDG.jpg',
      email: 'info@parisaeroport.fr',
    },
    {
      code: 'KRK',
      name: 'Krakow',
      airportName: 'John Paul II International Airport',
      airportUrl: 'https://www.krakowairport.pl/',
      imageUrl: '../assets/KRK.jpg',
      email: 'info@krakowairport.pl',
    },
  ];
}