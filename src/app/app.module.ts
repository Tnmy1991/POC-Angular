import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmailValidatorComponent } from './components/email-validator/email-validator.component';
import { WordsComponent } from './components/words/words.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';
import { SearchPostOfficesComponent } from './components/search-post-offices/search-post-offices.component';
import { SearchRailwaysStationsComponent } from './components/search-railways-stations/search-railways-stations.component';
import { BreezoMeterComponent } from './components/breezo-meter/breezo-meter.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailValidatorComponent,
    WordsComponent,
    WeatherWidgetComponent,
    SearchPostOfficesComponent,
    SearchRailwaysStationsComponent,
    BreezoMeterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
