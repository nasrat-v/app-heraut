import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {

  constructor(
    private http: HttpClient
  ) {}

  // This function makes an http call to google api to decode the cordinates
  public getAddress(lat: number, lan: number): Observable<any> {
    return this.http
      .get<any>(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lan}&key=${
          environment.googleMapsApiKey
        }`
      )
      .pipe(
        map(geoData => {
          if (!geoData || !geoData.results || geoData.results === 0) {
            return (null);
          }
          console.log(geoData.results);
          return (geoData.results[0].formatted_address);
        })
      );
  }

}
