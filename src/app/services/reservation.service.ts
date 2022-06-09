import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http : HttpClient) { }


getproducts(){
  return this.http.get("http://localhost:3000/reservations");
}



confirmation(id:any, confirme:any){
  return this.http.patch("http://localhost:3000/reservations/"+id,{confirme:!confirme})
}


}
