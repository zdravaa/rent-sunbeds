import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sunbeds } from './models/sunbed/sunbed.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  //private sunbed_data_url = "https://gorest.co.in/public/v2/users"
  private sunbed_data_url = "http://localhost:8081/sun_beds"
  private transaction_data_url = "http://localhost:8081/reservations"

  public getSunbeds() {
    return this.httpClient.get(this.sunbed_data_url)
  }

  public getReservations() {
    return this.httpClient.get(this.transaction_data_url)
  }

}
