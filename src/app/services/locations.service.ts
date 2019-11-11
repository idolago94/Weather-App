import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  allLocations = []
  updateList = new Subject();

  constructor( private localStorageService: LocalStorageService) { }


  getAllLocations(): any[] {
    return this.allLocations.slice();
  }

  weatherSelected(location) {
    if(!this.checkIfInList(location.position)) {
      this.addLocation(location);
    } else {
      this.removeLocation(location);
    }
  }

  addLocation(location) {
    this.allLocations.push(location);
    this.localStorageService.saveToLocalStorage(this.localStorageService.keys.LOCATIONS, this.allLocations);
    this.updateList.next();
  }

  removeLocation(locationToRemove) {
    // let indexToRemove = this.allLocations.findIndex((location => locationToRemove === location));
    this.allLocations = this.allLocations.filter((location) => locationToRemove !== location);
    this.localStorageService.saveToLocalStorage(this.localStorageService.keys.LOCATIONS, this.allLocations);
    this.updateList.next();
  }

  checkIfInList(position) {
    let result = this.allLocations.find((location) => location.position === position);
    if(result) {
      return true;
    } else return false;
  }
}
