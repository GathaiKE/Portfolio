import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
showMenu=false


  scrollAbout(){
    document.getElementById('about')?.scrollIntoView()
  }

  openToggle(){
    this.showMenu=!this.showMenu
  }
  constructor(private http:HttpClient){}

  downloadResume() {
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
