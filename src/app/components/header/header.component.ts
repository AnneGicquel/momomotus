import { Component, ViewChild } from '@angular/core';
import { FirstNameService } from 'src/app/services/first-name.service';
import { RulesComponent } from '../rules/rules.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor (
    public firstNameService: FirstNameService
  ){}

  getFirstName() {
    const getFirstName = this.firstNameService.getFirstNameInfo();
    return getFirstName;
  }

  @ViewChild(RulesComponent)
  rulesModal!: RulesComponent;

  openRulesModal(): void {
    console.log('modal, es-tu là???!!!');
    if (this.rulesModal) {
      this.rulesModal.openModal(); 
    }
  }
}
