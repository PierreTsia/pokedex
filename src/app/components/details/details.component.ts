import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  pokeDetails: Observable<any>;
  @Input() name: string;

  constructor(private pokeservice: PokemonService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.verifName();
  }


  ngOnChanges(changes: SimpleChanges) {
    this.verifName();
  }

  verifName() {
    if (this.name) {
      console.log("name : " + this.name);
      this.pokeDetails = this.pokeservice.pokemonDetail(this.name);
    } else {
      this.route.params.subscribe((params) => {
        console.log(params);
        this.pokeDetails = this.pokeservice.pokemonDetail(params.name);
      });
    }
  }

}
