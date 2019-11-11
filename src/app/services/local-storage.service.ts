import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  keys = {
    LOCATIONS: 'locations'
  }

  saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  }
}
