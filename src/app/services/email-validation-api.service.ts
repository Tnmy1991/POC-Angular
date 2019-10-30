import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailValidationApiService {

  constructor( private http: HttpClient ) { }

  private emailEndpoint: string  = environment.rapid_api.email.endpoint;

  validateEmail( email: string ) {
    return this.http.get(this.emailEndpoint + encodeURIComponent(email), {
      "headers": {
        "x-rapidapi-host": environment.rapid_api.email.host,
        "x-rapidapi-key": environment.rapid_api.key
      }
    });
  }

}
