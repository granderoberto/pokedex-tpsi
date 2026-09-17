import { Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

export const routes: Routes = [
  { path: 'categories', component: CategoriesComponent },
  { path: 'type/:name', component: PokemonListComponent },
  { path: 'pokemon/:name', component: PokemonDetailComponent },
  { path: '', redirectTo: '/categories', pathMatch: 'full' }
];