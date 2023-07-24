import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SocialsComponent } from '../socials/socials.component';
import { SideComponentComponent } from '../side-component/side-component.component';
import { FooterComponent } from '../footer/footer.component';
import { PortfolioService } from '../Services/portfolio.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,HeaderComponent,SocialsComponent, SideComponentComponent,FooterComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private Service:PortfolioService){}

  firstName:string=this.Service.firstName
  statement:string=this.Service.aboutStatement
  rSkills:string[]=this.Service.myLSkills
  lSkills:string[]=this.Service.myRSkills
  piture:string=this.Service.profilePicture
}
