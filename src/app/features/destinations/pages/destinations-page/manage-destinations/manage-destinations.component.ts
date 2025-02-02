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
  displayedColumns: string[] = [
    'code',
    'name',
    'airportName',
    'airportUrl',
    'imageUrl',
    'email',
    'actions',
  ];
  dataSource: Destination[] = [
    {
      code: 'ATL',
      name: 'Atlanta',
      airportName: 'Hartsfield-Jackson Atlanta International Airport',
      airportUrl: 'https://www.atl.com/',
      imageUrl:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2d/be/atlanta.jpg?w=1200&h=700&s=1',
      email: 'info@atl.com',
    },
    {
      code: 'LCA',
      name: 'Larnaca',
      airportName: 'Larnaca International Airport',
      airportUrl: 'https://www.hermesairports.com/',
      imageUrl: 'https://content.r9cdn.net/rimg/dimg/07/ed/c77e1eb8-city-32005-1648f20717a.jpg?width=1366&height=768&xhint=1600&yhint=527&crop=true',
      email: 'info@larnaca-airport.com',
    },
    {
      code: 'TLV',
      name: 'Tel Aviv',
      airportName: 'Ben Gurion Airport',
      airportUrl: 'https://www.iaa.gov.il/en/',
      imageUrl: 'https://www.carlton.co.il/wp-content/uploads/2023/02/Tel-Aviv-beach.jpg',
      email: 'info@ben-gurion.com',
    },
    {
      code: 'SFO',
      name: 'San Francisco',
      airportName: 'San Francisco International Airport',
      airportUrl: 'https://www.flysfo.com/',
      imageUrl: 'https://assets.prevu.com/blogs/images/reasons-to-move-to-the-san-francisco-bay-area/da12b31b01bddd911eedabc46a6f48b0?ixlib=rb-4.0.3&w=1200&lossless=true&auto=format%20compress&fit=fill&fill=solid&s=339c483c5919bf5302ca20a00d15411b',
      email: 'info@flysfo.com',
    },
    {
      code: 'NRT',
      name: 'Tokyo',
      airportName: 'Narita International Airport',
      airportUrl: 'https://www.narita-airport.jp/en/',
      imageUrl: 'https://www.civitatis.com/blog/wp-content/uploads/2022/11/calle-akihabara-tokio.jpg',
      email: 'contact@narita-airport.jp',
    },
    {
      code: 'SYD',
      name: 'Sydney',
      airportName: 'Sydney Kingsford Smith Airport',
      airportUrl: 'https://www.sydneyairport.com.au/',
      imageUrl: 'https://lp-cms-production.imgix.net/2023-01/876030516.jpg?fit=crop&w=3840&auto=format&q=75',
      email: 'support@sydneyairport.com.au',
    },
    {
      code: 'FRA',
      name: 'Frankfurt',
      airportName: 'Frankfurt Airport',
      airportUrl: 'https://www.frankfurt-airport.com/',
      imageUrl: 'https://content.r9cdn.net/rimg/dimg/39/86/ae1975d6-city-26939-15516fe0259.jpg?width=1366&height=768&xhint=2069&yhint=1666&crop=true',
      email: 'help@frankfurt-airport.com',
    },
    {
      code: 'LAX',
      name: 'Los Angeles',
      airportName: 'Los Angeles International Airport',
      airportUrl: 'https://www.flylax.com/',
      imageUrl: 'https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2017-01/Getty_515070156_EDITORIALONLY_LosAngeles_HollywoodBlvd_Web72DPI_0.jpg?h=0a8b6f8b&itok=B_VKqykq',
      email: 'info@flylax.com',
    },
    {
      code: 'DXB',
      name: 'Dubai',
      airportName: 'Dubai International Airport',
      airportUrl: 'https://www.dubaiairports.ae/',
      imageUrl: 'https://cdn.britannica.com/43/134743-050-D0625A44/train-first-Dubai-emirate-rapid-transit-line-kind-Sept-10-2009.jpg',
      email: 'help@dubai-airports.ae',
    },
    {
      code: 'JFK',
      name: 'New York',
      airportName: 'John F. Kennedy International Airport',
      airportUrl: 'https://www.jfkairport.com/',
      imageUrl: 'https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg',
      email: 'contact@jfkairport.com',
    },
    {
      code: 'LHR',
      name: 'London',
      airportName: 'Heathrow Airport',
      airportUrl: 'https://www.heathrow.com/',
      imageUrl: 'https://www.earthtrekkers.com/wp-content/uploads/2023/02/London-Travel-Tips.jpg',
      email: 'support@heathrow.com',
    },
   
  
  
  ];
}
