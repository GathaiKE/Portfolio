export interface Job{
    id:number
    title:string
    level:string
    company:string
    startDate:string
    endDate:string
    JobDescription:string
}

export interface Project{
    id:number
    image:string
    title:string
    description:string
    liveLink:string
    githubLink:string
    technologiesUsed:string[]
}

export interface Testimonial{
    id:number
    image:string
    name:string
    text:string
}