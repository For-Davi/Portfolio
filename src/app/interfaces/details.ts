export interface Details{
    id: string
    imagePath: string
    title: string
    about: string
    technologies: Technology[]
    pathDeploy: string
    pathRepository: string
}

export interface Technology{
    name: string
    imagePath: string
}