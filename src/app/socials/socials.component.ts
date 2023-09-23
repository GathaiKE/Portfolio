import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../Services/portfolio.service';

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css']
})
export class SocialsComponent {

  constructor(private Service:PortfolioService){}
  linkedin:string = this.Service.linkedIn
  discord:string = this.Service.discord
  github:string = this.Service.github

  open(link:string){
    window.open(link, '_blank')
  }
}
