import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  APP_KEY = 'ddfb6e18b770b286e59ddd9bb73b5b45';
  APP_ID = 'ec0c996f';
  URL = ' http://api.weatherunlocked.com'
  headers = new HttpHeaders({ 'Content-Type': 'application/json'});

  locationSelected = new Subject();

  constructor( private http: HttpClient) { }

  getCurrentWeather(position: any): Observable<any> {
    return <Observable<any>> this.http.get(
      `${this.URL}/api/current/${position.lat},${position.lng}?app_id=${this.APP_ID}&app_key=${this.APP_KEY}`, 
        this.headers);
  }

  getForecastWeather(position: any): Observable<any> {
    return <Observable<any>> this.http.get(
      `${this.URL}/api/forecast/${position.lat},${position.lng}?app_id=${this.APP_ID}&app_key=${this.APP_KEY}`, 
        this.headers);
  }
}
