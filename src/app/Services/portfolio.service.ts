import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {

  constructor() { }
    email:string="gathaikariuki9@gmail.com"
    linkedIn:string=""
    github:string=""
    discord:string=""
  //Landing Page
    
    firstName:string="Brian"
    secondName:string="Gathai"
    surname:string="Kariuki"
    salutation:string="Hello and welcome to my world, My name is"
    career:string="Full-Stack Software Delveloper"
    pitchText:string="Looking for a web wizard who can bring your ideas into life and make a positive impact Through the power of the web, you are in the right place, Lets take a trip though my world."
    navigation:string[]=[]
}
