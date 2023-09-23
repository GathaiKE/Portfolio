import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialsComponent } from '../socials/socials.component';
import { HeaderComponent } from '../header/header.component';
import { SideComponentComponent } from '../side-component/side-component.component';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterModule } from '@angular/router';
import { PortfolioService } from '../Services/portfolio.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule,SocialsComponent,HeaderComponent,SideComponentComponent,FooterComponent,RouterModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  constructor(private Service:PortfolioService, private Route:Router){
    console.log();
    
  }
  firstName=this.Service.firstName
  secondName=this.Service.secondName
  surname=this.Service.surname
  greeting=this.Service.salutation
  pitch=this.Service.pitchText
  career=this.Service.career
  fullName=this.firstName+" "+this.secondName+" "+this.surname
  statement:string=this.Service.aboutStatement
  rSkills:string[]=this.Service.myLSkills
  lSkills:string[]=this.Service.myRSkills
  piture:string=this.Service.profilePicture
  linkedin:string = this.Service.linkedIn
  discord:string = this.Service.discord
  github:string = this.Service.github
  testimonials=this.Service.Testimoials
  email:string = this.Service.email

logger(){
  this.Route.navigate(['/about'])
}

open(link:string){
  window.open(link, '_blank')
}
  
  
}
