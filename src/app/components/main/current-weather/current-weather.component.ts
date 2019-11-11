import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { LOADER, STAR, YELLOW_STAR, getIcon, getPng } from 'src/assets/variables';
import { LocationsService } from 'src/app/services/locations.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit, OnChanges {
  loaderIcon = LOADER;
  starIcon = STAR;
  weatherIcon = '';

  @Input() location: any;
  currentWeather;

  constructor( private weatherService: WeatherService, private locationsService: LocationsService, private imageService: ImageService ) { }

  ngOnInit() {
    this.setStarIcon();
    this.weatherService.getCurrentWeather(this.location.position).subscribe((response) => {
      this.currentWeather = response;
      this.weatherIcon = getIcon(response.wx_icon);
    })
  }

  ngOnChanges() {
    this.setStarIcon();
    this.weatherService.getCurrentWeather(this.location.position).subscribe((response) => {
      this.currentWeather = response;
      this.weatherIcon = getPng(response.wx_icon);
    })
  }

  setStarIcon() {
    if(this.locationsService.checkIfInList(this.location.position)) {
      this.starIcon = YELLOW_STAR;
    } else {
      this.starIcon = STAR;
    }
  }

  weatherSelected() {
    this.locationsService.weatherSelected(this.location);
    if(this.starIcon == STAR) {
      this.starIcon = YELLOW_STAR;
    } else {
      this.starIcon = STAR;
    }
  }

}
