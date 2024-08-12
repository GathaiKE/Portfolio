import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from 'src/app/interfaces/interface';
import { PortfolioService } from 'src/app/Services/portfolio.service';

@Component({
  selector: 'app-detail',
  standalone:true,
  imports:[AsyncPipe, NgIf, NgFor],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() job$!:Observable<Job | null>
}
