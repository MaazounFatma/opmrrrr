import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter-branche',
  templateUrl: './ajouter-branche.component.html',
  styleUrls: ['./ajouter-branche.component.css']
})
export class AjouterBrancheComponent implements OnInit {
  nom: string;
  tel1: number;
  tel2: number;
  adresse: string;
  constructor() { }

  ngOnInit() {
  }

}
