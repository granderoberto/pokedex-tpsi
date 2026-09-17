export interface NamedResource {
  name: string;
  url: string;
}

// un elemento dell'array "pokemon" dentro la risposta di /type/:name
export interface TypePokemon {
  slot: number;
  pokemon: NamedResource;
}

// la risposta di https://pokeapi.co/api/v2/type/:name
export interface TypeResponse {
  id: number;
  name: string;
  pokemon: TypePokemon[];
}

// le immagini del pokemon
export interface Sprites {
  front_default: string;
}

// un elemento dell'array "types" dentro la risposta di /pokemon/:name
export interface PokemonType {
  slot: number;
  type: NamedResource;
}

// la risposta di https://pokeapi.co/api/v2/pokemon/:name
export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: Sprites;
  types: PokemonType[];
}