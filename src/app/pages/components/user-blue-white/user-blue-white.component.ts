import { Component } from '@angular/core';
import {faLocation} from '@fortawesome/free-solid-svg-icons/faLocation'
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import { faSchool } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-blue-white',
  templateUrl: './user-blue-white.component.html',
  styleUrls: ['./user-blue-white.component.scss']
})
export class UserBlueWhiteComponent {
  locationIcon = faLocation
  schoolIcon = faSchool
  cakeIcon = faBirthdayCake
}
