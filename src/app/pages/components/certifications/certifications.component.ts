import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent {
  @Input() public getChange:boolean = false
  @Output() public setChange = new EventEmitter<string>()


  closeModal(): void {
    this.getChange = false

    const change = 'close'
    this.setChange.emit(change)
  }
}
