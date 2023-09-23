import { Injectable } from '@angular/core';
import { Job, Project, Testimonial } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {

  constructor() { }
  
  //Contact Details
    firstName:string="Brian"
    secondName:string="Gathai"
    surname:string="Kariuki"
    email:string="gathaikariuki@gmail.com"
    linkedIn:string=""
    github:string=""
    discord:string=""
    phone:string="+25471 216 6018"

  //Landing Page
    
    salutation:string="Hello and welcome to my world, My name is"
    career:string="Full-Stack Software Delveloper"
    pitchText:string=`
    Looking for a web wizard who can bring your ideas into life and make a positive impact Through the power of the web, you are in the right place, Lets take a trip though my world.
    `

    //About Page
    aboutStatement:string=`
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nihil saepe corporis perferendis explicabo reiciendis adipisci expedita totam ullam! Nisi, neque esse inventore quas doloribus velit impedit nesciunt quis voluptate alias! Velit voluptate molestiae minus itaque. Ab maiores ducimus fuga molestias sed quia aspernatur nam quaerat inventore amet saepe repudiandae a quisquam architecto recusandae maxime, earum eligendi blanditiis suscipit. Quod optio aliquid inventore accusamus quisquam ipsam rerum aliquam nostrum doloremque natus, maiores tenetur deleniti in maxime voluptate, perferendis quaerat! Facilis assumenda optio blanditiis ex. Perspiciatis aliquam similique iure praesentium officiis illum magnam eos, expedita odit deserunt ducimus, autem nisi reiciendis.
    `

    myLSkills:string[]=['HTML',' CSS','JavaScript','Typescript','Angular','Node']
    myRSkills:string[]=['Express','Redux','MySQL','TailwindCSS','FireBase','AWS']
    profilePicture:string='../../assets/IMG-20221220-WA0010.jpg'

    //Experience Page
    experience:Job[]=[
      {
        id:1,
        title:"Software Developer",
        level:"Trainee",
        company:"The Jitu",
        startDate:"April 2023",
        endDate:"June 2023",
        JobDescription:`
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia totam quis molestiae, magnam velit nulla sunt distinctio, illo hic dignissimos voluptates cum iste iure quos id est deserunt tempore modi ullam fugiat, similique ipsum! Itaque doloremque, dolore tenetur placeat repellat possimus minima earum perspiciatis labore! Placeat saepe mollitia culpa quos aut magnam temporibus ratione natus harum iste modi, ex iusto distinctio vero molestias ea laboriosam numquam sint molestiae consequuntur quaerat soluta cumque. Dicta voluptatem, ex rerum fugiat non sequi ad sint illo maiores magni minus dignissimos sunt perspiciatis? Quis facere eaque dolore eveniet sunt molestias eius deleniti. Atque officiis consequatur est similique natus mollitia quo sunt libero, excepturi, accusamus ad quis quisquam minus soluta odio. Rem, nam quis libero quidem laudantium ipsa officia accusantium consectetur, provident est in deleniti saepe reiciendis tempora repellendus sit asperiores tenetur et, id sed commodi similique! Totam in at veritatis rem quisquam impedit maxime quis, doloribus vitae voluptates dignissimos, consequatur enim ex blanditiis. Expedita eius voluptatibus repellendus voluptate, omnis quisquam vel voluptas rerum tenetur numquam ipsa, inventore vitae error cum. Minus, illo repellendus. Repellendus vel aliquid fuga, laborum illo eveniet voluptate incidunt commodi vero aspernatur blanditiis officia esse molestias facilis! Enim soluta harum unde autem.
        `
      }
    ]

    //Projects Page

    projects:Project[]=[
      {
        id:1,
        title:"Portfolio",
        displayImage:"../../assets/portfolio.png",
        liveLink:"",
        githubLink:"",
        technologiesUsed:['Angular','Node','Express','MsSQL','TailwindCSS','Typescript','NgRx'],
        description:`
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, impedit, eveniet itaque reiciendis aspernatur accusamus quibusdam officiis laborum at maxime pariatur amet corporis? Consequatur alias pariatur accusamus iste repudiandae et veniam! Provident, suscipit. Consequuntur harum reprehenderit assumenda ducimus saepe facilis, maiores doloremque ratione velit repellendus voluptas illum. Explicabo alias modi quod numquam cupiditate, similique consectetur, nam minus esse at nihil ut vitae reprehenderit voluptatem sunt beatae illum ullam maxime magni! Repudiandae cupiditate at fugit molestias, saepe ipsam! Dicta commodi dolorum accusamus quae iste quo amet, aliquid modi quos hic ducimus laudantium, nemo alias dolores aliquam! Eaque veritatis id vero facere!
        `,
        production:false
      }
    ]


  //Testimonials Page
  Testimoials:Testimonial[]=[
    {
      id:1,
      image:'',
      name:"The Jitu",
      text:`
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eos aliquid eius asperiores laborum quaerat provident repellendus? Nemo, totam! Dolorem magnam vitae suscipit accusamus, eius eveniet quaerat sint commodi maxime adipisci tempora ad Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eos aliquid eius asperiores laborum quaerat provident repellendus? Nemo, totam! Dolorem magnam vitae suscipit accusamus, eius eveniet quaerat sint commodi maxime adipisci tempora ad
      `
    },
    {
      id:2,
      image:'',
      name:"John Mwaniki",
      text:`
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eos aliquid eius asperiores laborum quaerat provident repellendus? Nemo, totam! Dolorem magnam vitae suscipit accusamus, eius eveniet quaerat sint commodi maxime adipisci tempora ad Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eos aliquid eius asperiores laborum quaerat provident repellendus? Nemo, totam! Dolorem magnam vitae suscipit accusamus, eius eveniet quaerat sint commodi maxime adipisci tempora ad
      `
    },
    {
      id:3,
      image:'',
      name:"Brian Gathai",
      text:`
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eos aliquid eius asperiores laborum quaerat provident repellendus? Nemo, totam! Dolorem magnam vitae suscipit accusamus, eius eveniet quaerat sint commodi maxime adipisci tempora ad Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eos aliquid eius asperiores laborum quaerat provident repellendus? Nemo, totam! Dolorem magnam vitae suscipit accusamus, eius eveniet quaerat sint commodi maxime adipisci tempora ad
      `
    }
  ]
}
