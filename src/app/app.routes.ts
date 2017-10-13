import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AngularFireAuthModule } from 'angularfire2/auth';

// HOME
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailsComponent } from './components/details/details.component';
import { MyPokedexComponent } from './components/my-pokedex/my-pokedex.component';
// SERVICES
import { AuthService } from './services/auth.service';
import { PokemonService } from './services/pokemon.service';
import { SearchService } from './services/search.service';


export const routes:Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'pokemons/page/:page', component: DashboardComponent},
    {path: 'pokemon/:name', component: DetailsComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'header', component: HeaderComponent},
    {path: 'home', component: HomeComponent},
	{path: 'my-pokedex', component: MyPokedexComponent}
   
    
    // FIREBASE
    //{ path: 'MyPokedex', component: MyPokedexComponent, canActivate: [AuthGuard]},
]

