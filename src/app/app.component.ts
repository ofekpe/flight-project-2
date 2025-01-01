import { Component } from '@angular/core';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  imports: [FooterComponent, HeaderComponent, RouterOutlet, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'flight-project-2';
}
