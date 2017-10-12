import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs/Observable'
import "rxjs";

import { Pokemon } from '../pokemon'

@Injectable()
export class PokemonService {


  constructor(private http: HttpClient) { }

  catchEmAll() {
    return this.http.get("http://pokeapi.salestock.net/api/v2/pokemon/").share();
  }

}
