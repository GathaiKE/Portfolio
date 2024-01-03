import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',loadComponent:()=>import('./landing/landing.component').then(c=>c.LandingComponent)},
  {path:'experience',loadComponent:()=>import('./experience/experience.component').then(c=>c.ExperienceComponent) },
  {path:'projects',loadComponent:()=>import('./projects/projects.component').then(c=>c.ProjectsComponent) },
  {path:'testimonials',loadComponent:()=>import('./testimonials/testimonials.component').then(c=>c.TestimonialsComponent) },
  {path:'contact',loadComponent:()=>import('./contact/contact.component').then(c=>c.ContactComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
