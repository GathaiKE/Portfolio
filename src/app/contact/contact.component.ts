import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialsComponent } from '../socials/socials.component';
import { SideComponentComponent } from '../side-component/side-component.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,SocialsComponent,SideComponentComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

}
