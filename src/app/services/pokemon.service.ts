import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeResponse, Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(public http: HttpClient) { }

  getType(name: string): Observable<TypeResponse> {
    return this.http.get<TypeResponse>(this.baseUrl + '/type/' + name);
  }

  getPokemon(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.baseUrl + '/pokemon/' + name);
  }
}