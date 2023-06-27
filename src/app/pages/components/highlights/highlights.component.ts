import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent {

  statusProject: boolean = false
  idProject: string = '' 

  constructor(private router: Router, private scroller:ViewportScroller){}

  openProject(event : MouseEvent):void{
    this.statusProject = true
    
    if(event.target instanceof HTMLElement){
      this.idProject = event.target.id
      document.getElementById('projectAbout')?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      })
      
    }

  }

  closeModal(dados: string){
    if(dados === 'close'){
      this.statusProject = false
      document.getElementById('highlights')?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      })
    }
  }

}
