import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  isHidden = false;
  contenuDeLInput = '';
  message = "Je suis le first";
  showhide() {
     this.isHidden = !this.isHidden;
  }
  changeContenuDeLInput(nouvelleValeur: string) {
    this.contenuDeLInput = nouvelleValeur;
  }
  constructor() {
    setTimeout(() => this.message = "autre valeur", 2000);
   // setInterval(() => this.isHidden = !this.isHidden, 2000);
  }
}

// Qu'est ce qu'on a ici
// 1- méthodes (behaviour / comportement) =>
// 2- attributs (état)                    =>

// 4 binings
// 1- Interpolation {{}}
// 2- property Binding []
// 3- event
