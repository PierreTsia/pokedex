import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailsComponent } from './components/details/details.component';
import { MyPokedexComponent } from './components/my-pokedex/my-pokedex.component';
import { PokeServiceService } from './services/poke-service.service'


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
    BrowserModule,
    HttpClientModule
  ],
  providers: [PokeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
