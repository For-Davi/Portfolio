export interface Details{
    id: string
    imagePath: string
    title: string
    about: string
    technologies: Technology[]
}

export interface Technology{
    name: string
    imagePath: string
}