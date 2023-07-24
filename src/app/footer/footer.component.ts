import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioService } from '../Services/portfolio.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private Service:PortfolioService){}

  email=this.Service.email
  phoneNumber=this.Service.phone
  linkedIn=this.Service.linkedIn
  github=this.Service.github
  discord=this.Service.discord

}
