import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-about',
  templateUrl: './project-about.component.html',
  styleUrls: ['./project-about.component.scss']
})
export class ProjectAboutComponent {
  @Input() public id: string =''
                  

}
