import { isIdentifier } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barrenav',
  templateUrl: './barrenav.component.html',
  styleUrls: ['./barrenav.component.css']
})
export class BarrenavComponent implements OnInit {

  constructor() { }

  



recupform = {
  Username : "",
  Motdepasse : "",
}

  
  // authentification: any = {
  //   Username: "Francine",
  //   Motdepasse: "1111",
  //   }
    

  ngOnInit(): void {
    
  }

boutonLogin: Boolean = false
alertId: Boolean = false

validate(){
 
console.log(this.recupform);

if (this.recupform.Username === 'Francine' && this.recupform.Motdepasse === '1111') {
  this.boutonLogin=!this.boutonLogin
  
}

else{
 
  this.alertId=!this.alertId
  setTimeout(() => {this.alertId=!this.alertId} , 5000);
}

}










}
