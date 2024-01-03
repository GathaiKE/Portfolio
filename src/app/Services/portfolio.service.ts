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
    discord:string=""
    linkedIn:string="https://www.linkedin.com/in/gathai-kariuki-061234228"
    github:string="https://github.com/GathaiKE"
    phone:string="+25471 216 6018"
    service_id:string="service_9mpn0zc"

  //Landing Page
    
    salutation:string="Hello and welcome to my world, My name is"
    career:string="Full-Stack Software Delveloper"
    pitchText:string=`
    Welcome to the realm where lines of code craft dreams into reality! I'm a seasoned Full Stack Software Developer fueled by a relentless passion for weaving digital marvels. Journey alongside me as we unravel the boundless possibilities that code unveils, exploring the transformative power of innovation woven into every pixel and line of my work..
    `

    //About Page
    aboutStatement:string=`
    So who is Gathai? I am a full-stack developer passionate about crafting innovative solutions that bridge the gap between intricate backend systems and intuitive user interfaces. With a solid foundation in a variety of programming languages, frameworks, and tools, I thrive on the challenges inherent in the software development realm. Throughout my career, I've had the privilege of leveraging my skills to build projects that optimize database performance, design seamless user experiences, and develop robust backend infrastructures. My approach combines technical prowess with a collaborative spirit, enabling me to seamlessly integrate within multidisciplinary teams and deliver high-quality products. I'm deeply committed to staying updated on the latest industry trends and technologies, ensuring that my work remains at the forefront of innovation. I'm always excited about the opportunity to contribute my skills to forward-thinking projects that push boundaries and make a meaningful impact so if you have one, I am waiting to hear about it.
    `

    myLSkills:string[]=['HTML',' CSS','JavaScript','Typescript','Angular','Node','PHP']
    myRSkills:string[]=['Express','Redux','MySQL','TailwindCSS','FireBase','AWS','MongoDB']
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
        During my tenure as a Software Developer Intern at The Jitu, I actively contributed to the development team, gaining hands-on experience in software design, coding, testing, and debugging. Working closely with seasoned developers, I participated in various stages of the software development lifecycle, assisting in the creation and enhancement of applications. This internship provided me with valuable insights into agile methodologies, collaborative problem-solving, and the practical application of programming languages and frameworks in a professional environment. I engaged in tasks such as web design, front-end and backend development, designing and developing databases, state management, unit and end to end testing among others, which allowed me to apply theoretical knowledge to real-world scenarios while refining my technical skills and fostering a deeper understanding of software development practices.
        `
      }
    ]

    //Projects Page

    projects:Project[]=[
      {
        id:1,
        title:"Portfolio",
        displayImage:"../../assets/portfolio.png",
        liveLink:"https://gathaikariuki.vercel.app/",
        githubLink:"https://github.com/GathaiKE/Portfolio",
        technologiesUsed:['Figma','Angular','TailwindCSS','Typescript'],
        description:`
        My portfolio serves as my inaugural and primary project, embodying my journey and showcasing my skills as a burgeoning developer. Crafted with meticulous attention to detail, this project represents a culmination of my technical expertise, creativity, and passion for software development. Designed as a showcase of my capabilities, it encapsulates a blend of intuitive user interface design and robust backend functionalities. Leveraging a modern tech stack and employing responsive design principles, my portfolio demonstrates my proficiency in designing beautiful interfaces with figma and interpreting the design into realistic and responsive websites using Angular and Tailwind CSS frameworks. Each element, from layout to interactive features, has been thoughtfully curated to not only exhibit my technical prowess but also reflect my personal style and commitment to excellence. Through this project, I aim to present my skills, experiences, and aspirations while providing visitors with an immersive glimpse into my capabilities and achievements in the world of software development."
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
      He was enthusiastic about developing scripts and finding solutions during his internship, and
      he had a self-driven desire to learn new things. He is fast in understanding instructions and
      adaptable when the original plan needs to be changed. He is an effective communicator both
      orally and in writing.
      `
    },
    {
      id:2,
      image:'',
      name:"Jonathan Ndambuki",
      text:`
      Working with him, I have seen a strong passion for creating scripts and problem-solving, displaying an eager willingness to learn. He demonstrated a proactive approach to acquiring new knowledge and was quick to grasp instructions. His adaptability shone through whenever adjustments to the initial plan were required. Notably, he effectively communicated ideas both verbally and in written form, showcasing adeptness in interpersonal skills across different mediums.
      `
    },
    {
      id:3,
      image:'',
      name:"John Mwaniki",
      text:`
      He exhibited genuine enthusiasm for script development and problem-solving, driven by an inherent curiosity to explore new concepts. His rapid comprehension of instructions, coupled with a flexible attitude towards adapting to evolving project requirements, underscored his adeptness. His communication skills, proficient in both verbal and written forms, facilitated effective collaboration and clear articulation of ideas, contributing significantly to the team's productivity and success
      `
    }
  ]
}
