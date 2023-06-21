import { Component, Input, OnInit, OnChanges, SimpleChanges, Output ,EventEmitter} from '@angular/core';
import projects from '../../../database/projectsAbout'
import { Details } from 'src/app/interfaces/details';

@Component({
  selector: 'app-project-about',
  templateUrl: './project-about.component.html',
  styleUrls: ['./project-about.component.scss']
})
export class ProjectAboutComponent implements OnInit, OnChanges{
  
  @Input() public id: string =''
  @Output() public close = new EventEmitter<string>()
  
  detailsImage:Details ={
    id:'',
    imagePath:'',
    title:'',
    about:'',
    technologies:[]
  }
  arrayFilter:any[]=[]

  constructor(){}
  
  ngOnInit(): void {
    this.listProject(this.id)
    
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes['id']){
      this.listProject(changes['id'].currentValue)

      console.log(changes['id'].currentValue)
    }
  }

  closeModal():void{
    this.close.emit('close')
  }
 
  listProject(id:string){
    this.arrayFilter = projects.filter((item)=>{
      return item.id === id
    })

    this.detailsImage.id = this.arrayFilter[0].id
    this.detailsImage.imagePath = this.arrayFilter[0].imagePath
    this.detailsImage.title = this.arrayFilter[0].title
    this.detailsImage.about = this.arrayFilter[0].about
    this.detailsImage.technologies = this.arrayFilter[0].technologies
  }

}
