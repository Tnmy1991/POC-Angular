import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { WeatherApiService } from '../../services/weather-api.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {

  constructor( private dataProvider: WeatherApiService ) { }

  private latitude: number;
  private longitude: number;
  public response: any;
  public icons_baseurl: string = environment.openweather_api.icons_url;
  public icons_sufix: string = environment.openweather_api.icons_suffix;

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.getCurrentWeatherData();
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }

    setInterval(() => { 
      this.getCurrentWeatherData(); 
    }, 300000)
  }

  getCurrentWeatherData() {
    this.dataProvider.currentWeatherAPI( this.latitude, this.longitude ).subscribe((res: any) => {
      this.response = res;
    });
  }
}
