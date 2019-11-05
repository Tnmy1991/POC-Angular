import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { WeatherApiService } from '../../services/weather-api.service';
import { element } from 'protractor';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {

  private latitude: number;
  private longitude: number;
  public response: any;
  public forecast: any;
  public currentTimestmp: number = Math.floor(Date.now() / 1000);
  public tomorrow: number = new Date(this.currentTimestmp*1000).getDate() + 1;
  public icons_baseurl: string = environment.openweather_api.icons_url;
  public icons_sufix: string = environment.openweather_api.icons_suffix;

  constructor( private dataProvider: WeatherApiService ) { }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.getCurrentWeatherData();
        this.get5daysForecastData();
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

  get5daysForecastData() {
    var index = 0, arrayIndex = [];
    this.dataProvider.weatherForcastAPI( this.latitude, this.longitude ).subscribe((res: any) => {
      this.forecast = res.list;
      res.list.forEach(element => {
        var checkDay = new Date(element.dt*1000).getDate();
        if( checkDay >= this.tomorrow ) {
          this.tomorrow = checkDay + 1;
        } else {
          arrayIndex.push(index);
        }
        index = index + 1;
      });
      
      for(var i=arrayIndex.length-1;i>=0;i--) {
        this.forecast.splice(arrayIndex[i], 1);
      }
    });
  }
}
