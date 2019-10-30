import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor( private http: HttpClient ) { }

  private apiEndpoint: string = environment.openweather_api.endpoint;
  private apiKey: string = environment.openweather_api.key;

  currentWeatherAPI( lat: number, lon: number ) {
    return this.http.get( this.apiEndpoint + "?lat=" + lat + "&lon=" + lon + "&appid=" + this.apiKey );
  }
}
