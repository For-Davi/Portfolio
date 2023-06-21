import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  @Output() modalStatus : boolean = false

  changeModal(): void{
    this.modalStatus = true
  }

  statusChange(valor: string): void{
    if(valor === 'close'){
      this.modalStatus = false
    } 
  }
}
