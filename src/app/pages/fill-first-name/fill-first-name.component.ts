import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FirstNameService } from 'src/app/services/first-name.service';

@Component({
  selector: 'app-fill-first-name',
  templateUrl: './fill-first-name.component.html',
  styleUrls: ['./fill-first-name.component.css']
})
export class FillFirstNameComponent implements OnInit {

  firstNameForm!: FormGroup;
  firstName: string = '';  // Initialiser à une chaîne vide

  // Utiliser une propriété pour éviter d'appeler plusieurs fois la fonction
  get firstNameLabel(): string {
    return this.firstNameService.getFirstNameInfo() || "Your First Name";
  }

  constructor(private formBuilder: FormBuilder, private router: Router, private firstNameService: FirstNameService) {}

  ngOnInit() {
    this.firstNameForm = this.formBuilder.group({
      firstName: ['']  // Ajouter une valeur initiale au formulaire (chaîne vide dans ce cas)
    });
  }

  accessToMomomotus() {
    this.firstNameService.storeFirstName(this.firstNameForm.value.firstName);
    this.router.navigate(['/momomotus']);
  }
}