import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { SocialsComponent } from '../socials/socials.component';
import { SideComponentComponent } from '../side-component/side-component.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { PortfolioService } from '../Services/portfolio.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Job } from '../interfaces/interface';
import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule,SocialsComponent,SideComponentComponent,HeaderComponent,FooterComponent, DetailComponent, NgClass],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{
  activeJobSub:BehaviorSubject<Job | null> = new BehaviorSubject<Job | null>(null)
  activeJob$:Observable<Job | null> = this.activeJobSub.asObservable()
  experience:Job[] = []

  constructor(private Service:PortfolioService){}

  ngOnInit(): void {
    this.experience=this.Service.experience.reverse()
    this.activeJobSub.next(this.experience[0])
  }


  nextJob(event:any){
    const jobId:string = (event.target as HTMLSelectElement).value
    const job:Job = this.experience.find(j=>j.id === parseInt(jobId)) as Job
    this.activeJobSub.next(job)
  }
 

}
