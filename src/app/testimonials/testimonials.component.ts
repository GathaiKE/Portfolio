import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialsComponent } from '../socials/socials.component';
import { SideComponentComponent } from '../side-component/side-component.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { PortfolioService } from '../Services/portfolio.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule,SocialsComponent,SideComponentComponent,HeaderComponent,FooterComponent],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {

  constructor(private Service:PortfolioService){}
  testimonials=this.Service.Testimoials

}
