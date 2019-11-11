import { Component, OnInit, ViewChild } from '@angular/core';
import { TARGET, LOADER } from 'src/assets/variables';
import { WeatherService } from 'src/app/services/weather.service';
import { GeographyService } from 'src/app/services/geography.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  inputIcon = TARGET;

  searchResults;

  @ViewChild('inputSearch') inputSearch: any;

  constructor( private weatherService: WeatherService, private geoService: GeographyService ) { }

  ngOnInit() {
  }

  searchLocation(input) {
    if((input && input.code == 'Enter') || (!input)) {
      this.inputIcon = LOADER;
      this.geoService.searchPlace(this.inputSearch.nativeElement.value)
      .pipe(map((res) => res.results)).subscribe((response) => {
        this.searchResults = response.map((result) => {
          return {
            name: result.formatted,
            position: {
              lat: result.geometry.lat,
              lng: result.geometry.lng
            }
          }
        });
        this.inputIcon = TARGET;
      })
    }
  }

  resultSelected(result) {
    this.weatherService.locationSelected.next(result);
    this.searchResults = null;
  }

}
