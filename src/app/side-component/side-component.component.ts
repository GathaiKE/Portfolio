import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../Services/portfolio.service';

@Component({
  selector: 'app-side-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-component.component.html',
  styleUrls: ['./side-component.component.css']
})
export class SideComponentComponent {

  constructor(private Service:PortfolioService){}
  email:string=this.Service.email

}
