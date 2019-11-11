import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeographyService {

  API_KEY = '8087364e4c2b4cfd990e74f4726a28e7';
  URL = 'https://api.opencagedata.com/geocode/v1/json';

  constructor( private http: HttpClient ) { }

  searchPlace(search): Observable<any> {
    return <Observable<any>> this.http.get(`${this.URL}?q=${search}&key=${this.API_KEY}`);
  }

  getPlaceName(position): Observable<any> {
    return <Observable<any>> this.http.get(`${this.URL}?q=${position.lat}+${position.lng}&key=${this.API_KEY}`);
  }
}
