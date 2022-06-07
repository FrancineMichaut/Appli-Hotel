import { Component, OnInit } from '@angular/core';
import { ChambreService } from 'src/app/services/chambre.service';    // problème résolu car cette ligne n'avait pas été importée, rajoutée en dur, voir pk 

@Component({
  selector: 'app-chambres',
  templateUrl: './chambres.component.html',
  styleUrls: ['./chambres.component.css']
})
export class ChambresComponent implements OnInit {
chambres : any; 

  constructor(private chambreService : ChambreService) { }         // J'ai injecté mon service dans les () de mon constructor pour pouvoir accéder aux méthodes crées dans mon service 

  ngOnInit(): void {                   // ngOnInit aide à savoir quand c'est le bon moment pour appeller la méthode 
    this.products()                // rappel: la méthode getproducts a été déclarée dans la partie service (1ère étape)
  }





products() {
  this.chambreService.getproducts().subscribe(data => {                // méthode products qui récupère mes ChambresComponent
    this.chambres = data;
    console.log(this.chambres);
  });

    
  }

delete(id:any){
this.chambreService.delete(id).subscribe( ()=>{
console.log("product with id:"+id+"+deleted");

this.products ();

})

}



}



