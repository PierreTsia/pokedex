import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeServiceService } from '../../services/poke-service.service';
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
  constructor(private pokeservice: PokeServiceService) { }

  ngOnInit() {

    this.res = this.pokeservice.catchEmAll();
    this.res.subscribe((data) => {
      console.log("moncul")
      console.log(data);
    });
   }
  }


