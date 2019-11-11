import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SearchComponent } from './components/main/search/search.component';
import { CurrentWeatherComponent } from './components/main/current-weather/current-weather.component';
import { DaysWeatherComponent } from './components/main/days-weather/days-weather.component';
import { LocationsComponent } from './components/main/locations/locations.component';
import { ResultComponent } from './components/main/search/result/result.component';
import { UTCtimePipe } from './pipes/utctime.pipe';
import { LocationNamePipe } from './pipes/location-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchComponent,
    CurrentWeatherComponent,
    DaysWeatherComponent,
    LocationsComponent,
    ResultComponent,
    UTCtimePipe,
    LocationNamePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
