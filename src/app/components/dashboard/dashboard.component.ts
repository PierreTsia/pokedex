import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from '../../services/pokemon.service';
import {Pokemon} from '../../pokemon';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  res: any = [];
  pokemons: Pokemon[] = [];
  constructor(private pokeservice: PokemonService) { }

  ngOnInit() {

    this.res = this.pokeservice.catchEmAll();
    this.res.subscribe((data) => {
      console.log("moncul")
      console.log(data);
    });
   }
  }


