import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Sunbeds } from '../models/sunbed/sunbed.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-sunbed-list',
  templateUrl: './sunbed-list.component.html',
  styleUrls: ['./sunbed-list.component.css']
})

export class SunbedListComponent implements OnInit {

 
  sunbeds: any = [];
  sunbedArr: Sunbeds[] = [];
  sunbedList: any;
  id: any;
  reservations: any;
  email: any;
  reservationEmail: any;
  isBooked = false;
  reservationsArr: Sunbeds[] = [];
  status: any;
  statusObj: any;
  merged: any = [];


  constructor(private apiService: ApiService, private httpClient: HttpClient) { }

/*   ngOnInit(): void {
    this.apiService.get().subscribe((data: any[]) => {
      console.log(data);
      this.sunbeds = data;
    })
  } */

  ngOnInit(): void {
    this.apiService.getSunbeds().subscribe(response => {
      this.sunbeds = response;
      
      for(var i = 0; i<this.sunbeds.entries.length; i++) {
        console.log("udje li uopce u ovu petlju?");
        this.sunbedArr.push(this.sunbeds.entries[i]);
        //console.log("ovo je arr", this.sunbedArr.length);
      }

    })
    const reservationEmail = this.apiService.getReservations().subscribe(reservResponse => {
      this.reservations = reservResponse;
      //this.email = this.reservations[0].email;
      //console.log("ovo su rezervacije: ", this.email);
      for(var i = 0; i< this.sunbeds.length; i++) {
        for(var j = 0; j < this.reservations.length; j++ ){
          if(this.sunbeds[i].id == this.reservations[j].sunbed_id) {
            console.log("we have a match, and matches are, sunbedId: ", this.sunbeds[i].id, "and reservation ID: ", this.reservations[j].id);
            this.email = this.reservations[j].email;
            console.log("ovo je email gdje imamo match: ", this.email);
            //this.status = "booked";
            this.statusObj = {
              "status": "booked"
            }
            this.sunbeds[i] = Object.assign({}, this.sunbeds[i], {status: 'booked'})
            //let merged = Object.assign({}, this.sunbeds, {status: 'booked'});
            console.log("ovo je standardni objekt: ", this.sunbeds);
            //this.merged = Object.assign({}, this.sunbeds[i], {status: 'booked'});
            console.log("ovo je merged: ", this.merged);
            //this.id = this.reservations[i].id;
            //this.reservationsArr.push(this.reservations[i].id);
          }
        }
        
      }
      console.log("ovdje imamo rezerviranu lezaljku: ", this.sunbeds);
      console.log("status od isBooked je: ", this.isBooked);
    })
  }
  

  
/*   const headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: '88cc345eb2c9ed1f0b93b1e2f71387b792e5697fcc6a810c9914a7a6673c430a'
  }) */

  
 // Below version works without (id:string)
  /* public bookSunbed(id: string) {
    const headers = { 'Authorization': 'Bearer 88cc345eb2c9ed1f0b93b1e2f71387b792e5697fcc6a810c9914a7a6673c430a' };
    const body = { 
      "id": '3213',
      "name": "Johnjo",
      "email": "test@yahoo.com",
      "gender": "male",
      "status": "active"
    };
    this.httpClient.post<any>('https://gorest.co.in/public/v2/users', body, { headers }).subscribe(response => {
      this.id = response.id;
    })
  } */

  // inactive = slobodan
  // active = rezerviran

  public bookSunbed(sunbedId: string) {
    console.log("ovo je id lezaljke na koju smo kliknuli: ", sunbedId);
    const body = {
      "sunbed_id": sunbedId,
      "email": "zdrava_mo@hotmail.com",
      "reservation_date": "2022-01-01",
      "days": 1,
    }
    this.httpClient.post<any>('http://localhost:8081/reservations', body).subscribe(data => {
         //{headers: headers}
         //this.number = '';
         window.alert("Sunbed booked!");
         window.location.reload();
         //this.router.navigateByUrl('sunbed-list');
       })
  }


  public cancelReservation(id: string) {
    console.log("ovo je id koji otkazujemo: ", id);
    this.apiService.getReservations().subscribe(response => {
      this.reservations = response;
      
      for(var i = 0; i<this.reservations.length; i++) {
        console.log("udje li uopce u ovu petlju?");
        if(this.reservations[i].sunbed_id == id) {
          console.log("zelimo izbrisati rezervaciju id = ", this.reservations[i].id);
          this.httpClient.delete('http://localhost:8081/reservations/' + this.reservations[i].id)
          .subscribe(() => console.log('Reservation cancelled!'));
          window.alert("Reservation cancelled!");
          window.location.reload();
        }
        //console.log("ovo je arr", this.sunbedArr.length);
      }

    })
  }


  public cancelSunbed(sunbedId: string) {
    console.log("Ovo je id koji prosljedjuje: ", sunbedId);
    const headers = { 'Authorization': 'Bearer 88cc345eb2c9ed1f0b93b1e2f71387b792e5697fcc6a810c9914a7a6673c430a' };
    const body = { 
      "status": "inactive"
    };
    this.httpClient.put<Sunbeds>('https://gorest.co.in/public/v2/users/' + sunbedId, body, {headers})
      .subscribe(data => this.id = data.id);
  }

}
