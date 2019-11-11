import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/services/locations.service';
import { LOADER } from 'src/assets/variables';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  loaderIcon = LOADER;

  allLocations;

  constructor( private locationsService: LocationsService,
               private localStorageService: LocalStorageService,
               private weatherService:WeatherService) { }

  ngOnInit() {
    // this.allLocations = this.locationsService.getAllLocations();
    this.allLocations = this.localStorageService.getFromLocalStorage(this.localStorageService.keys.LOCATIONS);
    this.locationsService.allLocations = this.allLocations;
    this.locationsService.updateList.subscribe(() => {
      this.allLocations = this.locationsService.getAllLocations();
    })
  }

  locationSelected(location) {
    this.weatherService.locationSelected.next(location);
  }

}
