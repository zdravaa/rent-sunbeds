import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sunbeds } from '../models/sunbed/sunbed.module';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-sunbed',
  templateUrl: './book-sunbed.component.html',
  styleUrls: ['./book-sunbed.component.css']
})
export class BookSunbedComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

  }


/*   public bookSunbed2(sunbedId: string) {
    console.log("Ovo je id koji prosljedjuje: ", sunbedId);
    const headers = { 'Authorization': 'Bearer 88cc345eb2c9ed1f0b93b1e2f71387b792e5697fcc6a810c9914a7a6673c430a' };
    const body = { 
      "status": "active"
    };
    this.httpClient.put<Sunbeds>('https://gorest.co.in/public/v2/users/' + sunbedId, body, {headers})
      .subscribe(data => this.id = data.id);
  } */

}
