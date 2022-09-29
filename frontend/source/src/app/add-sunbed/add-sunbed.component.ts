import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-sunbed',
  templateUrl: './add-sunbed.component.html',
  styleUrls: ['./add-sunbed.component.css']
})
export class AddSunbedComponent implements OnInit {

  sunbedId: any;
  number: any;
  price: any;
  zone: any;
  
  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  addSunbed() {
 /*    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json'); */
    const body = {
      "number": this.number,
      "zone": this.zone,
      "price": this.price
    }
    this.httpClient.post<any>('http://localhost:8081/sun_beds', body).subscribe(data => {
      //{headers: headers}
      this.sunbedId = data.id;
      this.number = '';
      this.zone = '';
      this.price = '';
      window.alert("New sunbed added!");
      //this.router.navigateByUrl('sunbed-list');
    })
    console.log("ovo su podaci koje saljemo: ", this.number);
  }


}
