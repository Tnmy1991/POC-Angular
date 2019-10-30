import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmailValidatorComponent } from './components/email-validator/email-validator.component';
import { WordsComponent } from './components/words/words.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailValidatorComponent,
    WordsComponent,
    WeatherWidgetComponent
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
