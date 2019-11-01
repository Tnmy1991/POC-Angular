import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PinCodesApiService {

  constructor( private http: HttpClient ) { }

  private apiEndpoint: string = environment.rapid_api.post_office.endpoint;

  searchPostOffices( body: any ) {
    return this.http.post(this.apiEndpoint, body, {
      "headers": {
        "x-rapidapi-host": environment.rapid_api.post_office.host,
        "x-rapidapi-key": environment.rapid_api.key
      }
    });
  }
}
