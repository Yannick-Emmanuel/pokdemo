import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ServiceService } from '../service.service';
import { PontService } from '../pont.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  filtre = '';
  select : string;
  listePokemon : Pokemon[];
  constructor(private service : ServiceService, private intermediare : PontService) {}

  ngOnInit() {
    this.listePokemon = this.service.getPokemons();
  }

  selectPokemon(select : string){
    this.intermediare.setName(select);
  }

}
