import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PinCodesApiService {

  constructor( private http: HttpClient ) { }

  private apiEndpoint: string = 'https://pincode.p.rapidapi.com/';

  searchPostOffices( body: any ) {
    return this.http.post(this.apiEndpoint, {
      "headers": {
        "x-rapidapi-host": "pincode.p.rapidapi.com",
        "x-rapidapi-key": "69c1311d05msh0058c33232ed5a1p1e603djsndf360ba5e395"
      },
      "body": body
    });
  }
}
