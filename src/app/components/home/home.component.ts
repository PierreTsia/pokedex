import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

// HOME
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DetailsComponent } from '../details/details.component';
// SERVICES
import { PokemonService } from '../../services/pokemon.service';
import { SearchService } from '../../services/search.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemonName: string;

  onPokemonChosen = (name) => {
    this.pokemonName = name;
  };

  constructor(private router: Router) {
      
   }

   
  ngOnInit() {
  }

}
