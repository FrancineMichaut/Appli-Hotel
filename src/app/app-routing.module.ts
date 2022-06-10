import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { AjouterunechambreComponent } from './composants/ajouterunechambre/ajouterunechambre.component';
import { AquagymComponent } from './composants/aquagym/aquagym.component';

import { ChambresComponent } from './composants/chambres/chambres.component';
import { PianoBarComponent } from './composants/piano-bar/piano-bar.component';
import { RandonneesComponent } from './composants/randonnees/randonnees.component';

import { ReservationsComponent } from './composants/reservations/reservations.component';


const routes: Routes = [
{ path: '', component: AccueilComponent, },
{ path: 'chambres', component: ChambresComponent, },
{ path: 'reservations', component: ReservationsComponent,},

{ path: 'ajouterunechambre', component : AjouterunechambreComponent,},
{ path: 'aquagym', component : AquagymComponent},
{ path: 'piano-bar', component: PianoBarComponent},
{ path: 'randonnees', component: RandonneesComponent},

];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
