
# Pokedex — verifica TPSI (API REST Pokemon)

Applicazione Angular che consulta la PokeAPI (https://pokeapi.co).

## Funzionalità

- Pagina con le categorie (tipi): normal, rock, ground
- Selezionando una categoria si ottiene la lista dei pokemon di quel tipo
- Selezionando un pokemon si apre la scheda con immagine, id, altezza, peso e tipi

## Tecnologie

- Angular 19, routing con parametri nell'URL (`/type/:name`, `/pokemon/:name`)
- HttpClient e Observable per le chiamate REST
- Modelli di dati in `src/app/models/pokemon.model.ts`
- Service unico in `src/app/services/pokemon.service.ts`

## Avvio

npm install
ng serve
