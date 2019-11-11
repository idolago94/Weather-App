import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { GeographyService } from 'src/app/services/geography.service';
import { map } from 'rxjs/operators';
import { LOADER } from 'src/assets/variables';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  loaderIcon = LOADER;

  constructor(private weatherService: WeatherService, private geoService: GeographyService) { }

  location;

  ngOnInit() {
    this.findMe();
    this.weatherService.locationSelected.subscribe((location: any) => {
      this.location = location;
    })
  }

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.location = {
          ...this.location,
          position: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
          }
        }
        this.geoService.getPlaceName(this.location.position).subscribe((response) => {
          this.location = {
            ...this.location,
            name: response.results[0].formatted
          }
        })
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
}
