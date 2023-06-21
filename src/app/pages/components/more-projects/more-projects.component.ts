import { Component } from '@angular/core';

@Component({
  selector: 'app-more-projects',
  templateUrl: './more-projects.component.html',
  styleUrls: ['./more-projects.component.scss']
})
export class MoreProjectsComponent {
  statusProject: boolean = false
  idProject: string = '' 

  constructor(){}

  openProject(event : MouseEvent):void{
    
    this.statusProject = true
    
    if(event.target instanceof HTMLElement){
      this.idProject = event.target.id
    }

  }

  closeModal(dados: string){
    if(dados === 'close'){
      this.statusProject = false
    }
  }
}
