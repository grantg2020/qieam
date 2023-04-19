import { Component } from '@angular/core';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.less']
})
export class JeuComponent {
  titre = ""
  prix = 0.0
  description = ""
  imageUrl = ""
}
