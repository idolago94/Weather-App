import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { LOADER, getIcon } from 'src/assets/variables';
import {UTCtimePipe} from 'src/app/pipes/utctime.pipe';


@Component({
  selector: 'app-days-weather',
  templateUrl: './days-weather.component.html',
  styleUrls: ['./days-weather.component.scss']
})
export class DaysWeatherComponent implements OnInit, OnChanges {
  loaderIcon = LOADER;
  getIcon = getIcon;

  @Input() location: any;
  forecastWeather;

  constructor( private weatherService: WeatherService ) { }

  ngOnInit() {
    this.weatherService.getForecastWeather(this.location.position).subscribe((response) => {
      this.forecastWeather = response.Days.slice(0, 4);
    })
  }

  ngOnChanges() {
    this.weatherService.getForecastWeather(this.location.position).subscribe((response) => {
      this.forecastWeather = response.Days.slice(0, 4);
    })
  }

}
