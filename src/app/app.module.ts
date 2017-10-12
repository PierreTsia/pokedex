import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailsComponent } from './components/details/details.component';
import { MyPokedexComponent } from './components/my-pokedex/my-pokedex.component';
import { PokeServiceService } from './services/poke-service.service'


// ANIMATION
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    DetailsComponent,
    MyPokedexComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
    BrowserModule,
    //FormsModule,
    //AngularFireModule.initializeApp(environment.firebase),
    //AngularFireAuthModule,
    //BrowserAnimationsModule
    BrowserModule,
    HttpClientModule
  ],
  providers: [PokeServiceService],
  providers: [/* AuthGuard, AuthService, AngularFireDatabase */],
  bootstrap: [AppComponent]
})
export class AppModule { }
