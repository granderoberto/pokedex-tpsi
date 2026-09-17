import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';
import { TypeResponse, TypePokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  imports: [RouterModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {

  typeName: string = '';        // il nome della categoria, preso dall'URL
  pokemons: TypePokemon[] = []; // i pokemon ricevuti dall'API
  loading: boolean = false;     // sto aspettando la risposta?
  o!: Observable<TypeResponse>; // l'observable della chiamata http

  constructor(private route: ActivatedRoute, private service: PokemonService) {
    this.route.paramMap.subscribe(this.getRouterParam);
  }

  // scatta quando l'URL cambia: leggo il parametro e faccio partire la chiamata
  getRouterParam = (params: ParamMap) => {
    let uri_param = params.get('name');
    if (uri_param != null) {
      this.typeName = uri_param;
      this.loadPokemons();
    }
  }

  loadPokemons(): void {
    this.loading = true;
    this.o = this.service.getType(this.typeName);
    this.o.subscribe(this.getData);
  }

  // TOCCA A TE: getData, l'arrow function che riceve il JSON
  // riceve un parametro d di tipo TypeResponse e deve:
  //  - copiare d.pokemon dentro this.pokemons
  //  - rimettere loading a false
  getData = (d: TypeResponse) => {
    this.pokemons = d.pokemon;
    this.loading = false;
  }
}