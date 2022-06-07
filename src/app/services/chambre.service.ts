// Un service est une classe TS composée d'attributs et de méthodes, dont l'instanciation
// est gérée par Angular.
// Un service est une seule instance de l’objet est utilisée à travers toute l’application.
// Une fois instancié, il est injectable dans n'importe lequel de vos composants ou dans
// un autre service.
// Ils permettent de :
// • réutiliser du code entre différents composants
// • faciliter l'échange des données
// • centraliser les appels de service
// • séparer les responsabilités visuelles (component) et fonctionnelles/techniques (service)




import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {    // angular créé un dossier services, à l'intérieur du fichier de mon service, quand j'ai créé un nouveau servive (ng g s services/chambres)

  constructor(private http : HttpClient) { }           // Injection du service HttpClient                        


  getproducts(){
    return this.http.get("http://localhost:3000/chambres");  // 1ère étape de la méthode get qui appelle la requête de mes produits, la 2ème étape se trouve dans le composant "chambres", on va consommer les données de la méthode getProducts en créant une méthode products(), mais il faut d'abord injecter mon service pour pouvoir accéder à ses méthodes : constructor(private chambresService : ChambresService) { }. Je dois aussi créer un tableau local chambress [], où je vais stocker tous mes éléments que je récupère via ma méthode products(). 
  }
  
  
saveChambre(chambre:any){
  return this.http.post("http://localhost:3000/chambres", chambre)
}

delete(id : any){
  return this.http.delete("http://localhost:3000/chambres/"+id)
}


}



