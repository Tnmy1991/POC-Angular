import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NumbersFactsApiService {

  constructor( private http: HttpClient ) { }

  private apiEndpoint: string = environment.rapid_api.numbers.endpoint;

  getNumbersFacts( factQuery: string ) {
    return this.http.get( this.apiEndpoint + factQuery + '?max=20&fragment=true&min=10&json=true', {
      "headers": {
        "x-rapidapi-host": environment.rapid_api.numbers.host,
        "x-rapidapi-key": environment.rapid_api.key
      }
    });
  }
}
