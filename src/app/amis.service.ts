import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AmisService {

  amis = [
    {
      name: "Thor",
      ajoute: true,
    },
    {
      name: "Loki",
      ajoute: false,
    },
    {
      name: "Ares",
      ajoute: false,
    },
    {
      name: "Atreus",
      ajoute: false,
    },
    {
      name: "Minerva",
      ajoute: true,
    },
    {
      name: "Kratos",
      ajoute: true,
    },
    {
      name: "Poseidon",
      ajoute: true,
    },
    {
      name: "Jenkins",
      ajoute: false,
    },
  ];

  constructor() { }

  getAmis(user: string) {
    if (user == "grant")
      return this.amis;
    return [];
  }

}
