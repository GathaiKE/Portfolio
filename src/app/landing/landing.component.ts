import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialsComponent } from '../socials/socials.component';
import { HeaderComponent } from '../header/header.component';
import { SideComponentComponent } from '../side-component/side-component.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule,SocialsComponent,HeaderComponent,SideComponentComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

}
