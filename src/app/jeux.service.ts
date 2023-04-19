import { Injectable } from '@angular/core';
import { JeuComponent } from './jeu/jeu.component';

@Injectable({
  providedIn: 'root'
})
export class JeuxService {

  jeuxUtilisateur = [
    { titre: "Titre 1", prix: 19.99, appartenu: true, imageUrl: "" },
    { titre: "Titre 2", prix: 29.99, appartenu: false, imageUrl: "" },
    { titre: "Titre 3", prix: 29.99, appartenu: true, imageUrl: "" },
    // new JeuComponent("Titre 1", 19.99, "Description", ""),
    // new JeuComponent("Titre 2", 29.99, "Description", ""),
    // new JeuComponent("Titre 3", 59.99, "Description", ""),
  ]

  constructor() { }

  /**
   * 
   */
  getJeuxUtilisateur() {
    return this.jeuxUtilisateur;
  }
}
