import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
})
export class ReservationsComponent implements OnInit {
  reservations: any;
  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.products();
  }

  products() {
    this.reservationService.getproducts().subscribe((data) => {
      this.reservations = data;
      console.log(this.reservations);
    });
  }

  changeStatus(r:any){
    this.reservationService.confirmation(r.id, r.confirme).subscribe(data=>{
      this.products()
    })
    
  }

}

