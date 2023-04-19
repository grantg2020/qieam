import { Component, Inject, Injectable, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.less'],
})
@Injectable({ providedIn: 'root' })
export class JeuComponent {
  @Input() titre = ""
  @Input() prix = 0.0
  @Input() appartenu = false
  @Input() imageUrl = ""



  // constructor(@Inject(String) titre: string, @Inject(Number) prix: number, @Inject(String) description: string, @Inject(String) imageUrl: string) {
  //   this.titre = titre;
  //   this.prix = prix;
  //   this.description = description;
  //   this.imageUrl = imageUrl;
  // }
}
