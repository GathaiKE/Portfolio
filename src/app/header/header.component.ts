import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { FeedbackComponent } from '../utilities/feedback/feedback.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule, FeedbackComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
showMenu=false
showFeedback:boolean = false
text:string = ''


  scrollAbout(){
    document.getElementById('about')?.scrollIntoView()
  }

  openToggle(){
    this.showMenu=!this.showMenu
  }
  constructor(private http:HttpClient){}

  downloadResume() {
    this.text = 'The download has begun!'
    this.showFeedback = true
    
    setTimeout(() => {
      this.showFeedback = false
    }, 2500);
    
    const resumePath = './assets/Resume.pdf';
    this.http.get(resumePath, { responseType: 'blob' }).subscribe((blob) => {
      const resumeBlob = new Blob([blob], { type: 'application/pdf' });
      const resumeUrl = window.URL.createObjectURL(resumeBlob);
      const a = document.createElement('a');
      a.href = resumeUrl;
      a.download = 'gathai_kariuki_resume.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(resumeUrl);
    });
  }
}
