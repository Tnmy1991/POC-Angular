import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor( private http: HttpClient ) { }

  private currentConditionEndpoint: string = environment.openweather_api.current_condition;
  private forecastConditionEndpoint: string = environment.openweather_api.forecast_5days;
  private apiKey: string = environment.openweather_api.key;

  currentWeatherAPI( lat: number, lon: number ) {
    return this.http.get( this.currentConditionEndpoint + "?lat=" + lat + "&lon=" + lon + "&appid=" + this.apiKey );
  }

  weatherForcastAPI( lat: number, lon: number ) {
    return this.http.get( this.forecastConditionEndpoint + "?lat=" + lat + "&lon=" + lon + "&appid=" + this.apiKey );
  }
}
