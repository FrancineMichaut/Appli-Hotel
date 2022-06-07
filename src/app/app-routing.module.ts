import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { AjouterunechambreComponent } from './composants/ajouterunechambre/ajouterunechambre.component';
import { AutresServicesComponent } from './composants/autres-services/autres-services.component';
import { ChambresComponent } from './composants/chambres/chambres.component';
import { ReservationsComponent } from './composants/reservations/reservations.component';

const routes: Routes = [
{ path: '', component: AccueilComponent, },
{ path: 'chambres', component: ChambresComponent, },
{ path: 'reservations', component: ReservationsComponent,},
{ path: 'autres-services', component: AutresServicesComponent,},
{ path: 'ajouterunechambre', component : AjouterunechambreComponent,}
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
