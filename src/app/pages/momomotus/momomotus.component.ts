import { Component } from '@angular/core';

@Component({
  selector: 'app-momomotus',
  templateUrl: './momomotus.component.html',
  styleUrls: ['./momomotus.component.css']
})
export class MomomotusComponent {

  // grille 8*6
  grid: string[][] = [
    [' ', ' ', ' ', ' ', ' ',' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ',' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ',' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ',' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ',' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ']
  ];

  // row AZERTY
  azertyRow: string[] = ['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];

  // row QSDFGHJKLM
  qsdfghjklmRow: string[] = ['Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M'];

  // row W X C V B N
  wxcvbnRow: string[] = ['W', 'X', 'C', 'V', 'B', 'N'];

  // row W X C V B N suite =>  supp. , valider
  specialButtons: string[] = ['SUPPRIMER', 'VALIDER'];


  // a fixer !!!
  updateGrid(letter: string) {
    console.log('Lettre cliquée :', letter);
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        console.log('grid  =>', this.grid[i].length);
        if (this.grid[i][j] === ' ') {
          this.grid[i][j] = letter;
          break;
        }
      }
    }
  }
}