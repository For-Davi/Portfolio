import { Component } from '@angular/core';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent {

  statusProject: boolean = false
  idProject: string = '' 

  constructor(){}

  openProject(event : MouseEvent):void{
    this.statusProject = true
    
    if(event.target instanceof HTMLElement){
      this.idProject = event.target.id
    }

  }

}
