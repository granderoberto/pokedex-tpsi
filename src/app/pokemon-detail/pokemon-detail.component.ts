import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-detail',
  imports: [RouterModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent {

  pokemon!: Pokemon;         // il pokemon ricevuto dall'API (uno solo)
  loading: boolean = false;  // sto aspettando la risposta?
  o!: Observable<Pokemon>;   // l'observable della chiamata http

  constructor(private route: ActivatedRoute, private service: PokemonService) {
    this.route.paramMap.subscribe(this.getRouterParam);
  }

  // scatta quando l'URL cambia: leggo il parametro e faccio partire la chiamata
  getRouterParam = (params: ParamMap) => {
    let uri_param = params.get('name');
    if (uri_param != null) {
      this.loadPokemon(uri_param);
    }
  }

  loadPokemon(name: string): void {
    this.loading = true;
    this.o = this.service.getPokemon(name);
    this.o.subscribe(this.getData);
  }

  // arriva la risposta http: il JSON È già il pokemon, lo assegno direttamente
  getData = (d: Pokemon) => {
    this.pokemon = d;
    this.loading = false;
  }
}