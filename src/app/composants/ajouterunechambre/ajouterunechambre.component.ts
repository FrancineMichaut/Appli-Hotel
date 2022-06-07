import { Component, OnInit } from '@angular/core';
import { ChambreService } from 'src/app/services/chambre.service';

@Component({
  selector: 'app-ajouterunechambre',
  templateUrl: './ajouterunechambre.component.html',
  styleUrls: ['./ajouterunechambre.component.css']
})
export class AjouterunechambreComponent implements OnInit {


  // **********************service injecté de chambreservice où on a créé la méthode saveproduit pour le formulaire*****************
  constructor(private chambreService : ChambreService) { }

  ngOnInit(): void {
  }

  // ****************************méthode reliée au bouton ajouter dans ajouter une chambre dans la partie administrateur************
  saveChambre(chambre: any){
    let data = chambre.value
    this.chambreService.saveChambre(data).subscribe(data=>{
    console.log("les données sont enregistrées")
    
  })
}

}
