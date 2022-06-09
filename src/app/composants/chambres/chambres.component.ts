import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChambreService } from 'src/app/services/chambre.service'; // problème résolu car cette ligne n'avait pas été importée, rajoutée en dur, voir pk

@Component({
  selector: 'app-chambres',
  templateUrl: './chambres.component.html',
  styleUrls: ['./chambres.component.css'],
})
export class ChambresComponent implements OnInit {
  chambres: any;

  reservations: any = {
    // recup from form
    userName: '',
    arivalDate: '',
    numberDays: '',
    // recup info
    titleChambre: '',
    price: '',
    // algo a faire calcul
    totalPrice: '',
  };

  constructor(private chambreService: ChambreService) {} // J'ai injecté mon service dans les () de mon constructor pour pouvoir accéder aux méthodes crées dans mon service

  ngOnInit(): void {
    // ngOnInit aide à savoir quand c'est le bon moment pour appeller la méthode
    this.products(); // rappel: la méthode getproducts a été déclarée dans la partie service (1ère étape)
  }

  products() {
    this.chambreService.getproducts().subscribe((data) => {
      // méthode products qui récupère mes ChambresComponent
      this.chambres = data;
      console.log(this.chambres);
    });
  }

  delete(id: any) {
    this.chambreService.delete(id).subscribe(() => {
      console.log('product with id:' + id + '+deleted');

      this.products();
    });
  }

  recupInfoChambre(c: any) {
    this.reservations.titleChambre = c.title;
    this.reservations.price = c.price;
    console.log(this.reservations);
  }

  saveReserver(reserver: any) {
    console.log(reserver.value); // à finir
  }

  calculPrixsejour(prixsejour: any) {
    console.log(prixsejour.value); // à finir
  }

  create(f: any) {
    // let tata = formReservation.value;
    console.log('formReservation.nom ', f);
    this.reservations.userName = f.nom;
    this.reservations.arivalDate = f.date;
    this.reservations.numberDays = f.nombreDeNuit;
    this.reservations.totalPrice = f.nombreDeNuit * this.reservations.price;

    console.log('ICI TOUT MON OBJET  ', this.reservations);
    // console.log('this.reservations ', this.reservations);

    this.chambreService.create(this.reservations).subscribe((data) => {
      // fonction qui récupère les données du formulaire dans le bouton réserver et qui les rajoutent (qui créé) un nouvel oblet dans Jsonp, tableau "reservations"
      console.log('data success ! ', data);
    });
  }
}
