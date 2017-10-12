import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// FIREBASE
//import { AngularFireAuthModule } from 'angularfire2/auth';
//import { AuthService } from './auth.service';
//import { AuthGuard } from './authguard.service';

// HOME
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DetailsComponent } from '../details/details.component';
import { MyPokedexComponent } from '../my-pokedex/my-pokedex.component';
// SERVICES
import { PokeServiceService } from '../../services/poke-service.service';
import { SearchServiceService } from '../../services/search-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
