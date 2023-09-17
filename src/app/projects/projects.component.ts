import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialsComponent } from '../socials/socials.component';
import { SideComponentComponent } from '../side-component/side-component.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { PortfolioService } from '../Services/portfolio.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, SocialsComponent, SideComponentComponent, HeaderComponent,FooterComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  constructor(private Service:PortfolioService){}
  
  projects=this.Service.projects
}
