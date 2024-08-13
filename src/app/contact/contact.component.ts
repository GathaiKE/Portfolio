import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialsComponent } from '../socials/socials.component';
import { SideComponentComponent } from '../side-component/side-component.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from 'environments/environment';
import { PortfolioService } from '../Services/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,SocialsComponent,SideComponentComponent,FooterComponent,HeaderComponent, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  constructor(private fb:FormBuilder, private service:PortfolioService){}
  contactForm!:FormGroup<any>
  serviceId: string = environment.SERVICE_ID
  templateId:string = environment.TEMPLATE_ID
  userId:string = environment.USER_ID
  name:string = this.service.firstName+" "+this.service.secondName+" "+this.service.surname

ngOnInit(): void {
  this.contactForm = this.fb.group({
    name:[''],
    email:[''],
    subject:[''],
    message:['']
  })
}

onSubmit(e:Event){
  let formData = this.contactForm.value

  const data = {
    from_name:formData.name as string,
    to_name: this.name,
    subject:formData.subject as string,
    message:formData.message as string
  }

  e.preventDefault();
  emailjs.send(this.serviceId, this.templateId, data, this.userId)
    .then((result: EmailJSResponseStatus) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });

}

}
