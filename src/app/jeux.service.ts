import { Injectable } from '@angular/core';
import { JeuComponent } from './jeu/jeu.component';

@Injectable({
  providedIn: 'root'
})
export class JeuxService {

  jeuxUtilisateur = [
    { titre: "Résumé", prix: 19.99, appartenu: true, imageUrl: "" },
    { titre: "Résumé", prix: 29.99, appartenu: true, imageUrl: "" },
    { titre: "Résumé", prix: 29.99, appartenu: true, imageUrl: "" },
  ]

  jeuxDisponible = [
    { titre: "Titre 1", prix: 19.99, appartenu: false, imageUrl: "" },
    { titre: "Titre 2", prix: 29.99, appartenu: false, imageUrl: "" },
    { titre: "Titre 3", prix: 29.99, appartenu: false, imageUrl: "" },
  ]

  constructor() { }

  /**
   * @returns Users games
   */
  getJeuxUtilisateur(user: string) {
    if (user == "grant")
      return this.jeuxUtilisateur;
    return [];
  }

  /**
   * @returns Users games
   */
  getJeuxDisponible() {
    return this.jeuxDisponible;
  }
}
