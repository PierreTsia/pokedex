import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable'
import "rxjs";

import { Pokemon } from '../pokemon'

@Injectable()
export class PokemonService {


  constructor(private http: HttpClient) { }

  catchEmAll(page: number): Observable<Object> {

    return this.http.get("https://pokeapi.co/api/v2/pokemon/?offset=" + ((page - 1) * 20)).share();
  }

  pokemonDetail(name: string): Observable<Object> {

    return this.http.get("https://pokeapi.co/api/v2/pokemon/" + name).share();
  }

}
