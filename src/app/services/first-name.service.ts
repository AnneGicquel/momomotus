// import { Injectable } from '@angular/core';
// import { FormGroup } from '@angular/forms';

// @Injectable({
//   providedIn: 'root'
// })
// export class FirstNameService {

//   constructor() { }

//   currentTableNumberStorage: any;

//   // RÉCUPERATION du numéro de table
//   getFirstNameStorage() {
//     const firstNameStorage = localStorage.getItem('first-name-storage');
    
//     // if valeur associée existe
//     if (firstNameStorage) {
//       // .parse(): retourne la valeur convertie en objet 
//       return JSON.parse(firstNameStorage);
//     } else {
//       this.getFirstNameStorage();
//     }
//   }

//   // RÉCUPÉRATION de la value du FormGroup
//   storeFirstName (firstName: FormGroup) {
//     // ajoute à l'emplacement de stockage 
//     localStorage.setItem('first-name-storage', JSON.stringify(firstName));

//   }


//   // RENVOIE du numéro de table saisie
//   getTableNumberInfo() {
//     // You can read data from localStorage using the getItem() method. 
//     // This method accepts the key as a parameter and returns the value as a string.
//     return localStorage.getItem('firstName');

//   }


// }


import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FirstNameService {

  constructor() { }

  // RÉCUPERATION du prénom
  getFirstNameStorage() {
    const firstNameStorage = localStorage.getItem('first-name-storage');
    return firstNameStorage ? JSON.parse(firstNameStorage) : null;
  }

  // RÉCUPÉRATION de la valeur du FormControl
  storeFirstName(firstName: string) {
    localStorage.setItem('first-name-storage', JSON.stringify(firstName));
  }

  // RENVOIE du prénom stocké
  getFirstNameInfo() {
    return localStorage.getItem('first-name-storage');
  }


}

