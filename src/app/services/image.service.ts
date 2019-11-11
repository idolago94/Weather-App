import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  getImage(locationName): Observable<any> {
    return <Observable<any>> this.http.get(`https://api.teleport.org/api/urban_areas/slug:${locationName}/images/`);
  }
}
