import { Component } from '@angular/core';
import { FirstNameService } from 'src/app/services/first-name.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor (
    public firstNameService : FirstNameService
  ){}

  getFirstName(){
    const getFirstName = this.firstNameService.getFirstNameInfo();
    return getFirstName
}

}
