import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from './services/pokemon.service';
import {Pokemon} from './pokemon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
  constructor() {

  
   }
 
  ngOnInit() {



  }

}

