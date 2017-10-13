import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';

import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../pokemon';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  res: any = [];
  pokemons: Pokemon[] = [];
  linksArray: number[] = [];
  currentPage: number;
  @Input() onPokemonChosen: Function;

  constructor(private pokeservice: PokemonService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentPage = params.page;
      this.res = this.pokeservice.catchEmAll(params.page);
      this.res.subscribe((data) => {
        this.createLinksArray(data.count);
      })
    });

  }

  createLinksArray(pokemonNumber: number) {
    let numberOfPages = Math.ceil(pokemonNumber / 20)
    let linksArray = [numberOfPages];

    let i = 0;
    while (i < numberOfPages) {
      linksArray[i] = i + 1;
      i++;
    }
    this.linksArray = linksArray;
  }

  onPokeClicked(pokeName) {
    if (this.onPokemonChosen) {
      this.onPokemonChosen(pokeName);
    } else {
      this.router.navigate(['pokemon', pokeName]);
    }
  }

}


