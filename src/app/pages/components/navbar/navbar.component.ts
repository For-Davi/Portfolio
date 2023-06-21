import { Component,HostListener } from '@angular/core';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faBars, faClose} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  // Icones
  sunIcon = faSun
  hamburgerIcon = faBars
  closeIcon = faClose

  // Variaveis
  menuOpen:boolean = false

  constructor(){}

  @HostListener('window:resize',['$event'])
  onWindowResize(event:Event){
    if(window.innerWidth > 768){
      this.menuOpen = false
    }
  }
  
  toogleList():void{
    this.menuOpen = !this.menuOpen
  }

}
