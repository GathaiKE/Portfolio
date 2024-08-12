export interface Job{
    id:number
    title:string
    level:string
    company:string
    startDate:string
    endDate:string
    JobDescription:string
    duties: Duty[]
    skills:Skill[]
}

export interface Project{
    id:number
    displayImage:string
    title:string
    description:string
    liveLink?:string
    githubLink:string
    technologiesUsed:string[]
    production:boolean
}

export interface Testimonial{
    id:number
    image:string
    name:string
    text:string
}

interface Duty {
    id:number
    description:string
}

interface Skill {
    id:number
    name:string
}