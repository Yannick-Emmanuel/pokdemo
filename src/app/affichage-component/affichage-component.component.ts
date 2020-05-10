import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Pokemon } from '../pokemon';
import { PontService } from '../pont.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-affichage-component',
  templateUrl: './affichage-component.component.html',
  styleUrls: ['./affichage-component.component.css']
})
export class AffichageComponentComponent implements OnInit {

  listePokemon : Pokemon[];
  pokemonRecherche : string;
  subscription : Subscription;

  constructor(private service : ServiceService, private intermediaire : PontService) {
    this.subscription = this.intermediaire.getObservable().subscribe(name => { this.pokemonRecherche = intermediaire.getName(); });
   }

  ngOnInit() {
    this.pokemonRecherche = this.intermediaire.getName();
    this.listePokemon = this.service.getPokemons();
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
