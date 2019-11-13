import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlShortenerApiService {

  constructor( private http: HttpClient ) { }

  private apiEndpoint: string  = environment.rapid_api.url_shortener.endpoint;

  getShortenUrl( body: any ) {
    return this.http.post(this.apiEndpoint, body, {
      "headers": {
        "x-rapidapi-host": environment.rapid_api.url_shortener.host,
        "x-rapidapi-key": environment.rapid_api.key
      }
    }); 
  }
}
