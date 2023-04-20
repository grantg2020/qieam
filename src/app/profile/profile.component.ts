import { Component, OnInit } from '@angular/core';
import { JeuxService } from '../jeux.service';
import { JeuComponent } from '../jeu/jeu.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  constructor(private jeuxService: JeuxService) { }

  jeuxUtilisateur: JeuComponent[] = [];
  jeuxDisponible: JeuComponent[] = [];
  ngOnInit(): void {
    this.jeuxUtilisateur = this.jeuxService.getJeuxUtilisateur("grant");
    this.jeuxDisponible = this.jeuxService.getJeuxDisponible();
  }

}
