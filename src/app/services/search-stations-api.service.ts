import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchStationsApiService {

  constructor( private http: HttpClient ) { }

  private apiPNREndpoint: string = environment.rapid_api.indian_railways.endpoint + "index.php";
  private apiFindStationEndpoint: string = environment.rapid_api.indian_railways.endpoint + "findstations.php?station=";

  searchRailwaysStations( station: string ) {
    return this.http.get( this.apiFindStationEndpoint + encodeURIComponent(station), {
      "headers": {
        "x-rapidapi-host": environment.rapid_api.indian_railways.host,
        "x-rapidapi-key": environment.rapid_api.key
      }
    });
  }
}
