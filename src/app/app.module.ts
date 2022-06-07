import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarrenavComponent } from './composants/barrenav/barrenav.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { ChambresComponent } from './composants/chambres/chambres.component';
import { ReservationsComponent } from './composants/reservations/reservations.component';
import { AutresServicesComponent } from './composants/autres-services/autres-services.component';
import { AjouterunechambreComponent } from './composants/ajouterunechambre/ajouterunechambre.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BarrenavComponent,
    ChambresComponent,
    AccueilComponent,
    ReservationsComponent,
    AutresServicesComponent,
    AjouterunechambreComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,                  // Module qui permet d'effectuer les requêtes http
       FormsModule       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


