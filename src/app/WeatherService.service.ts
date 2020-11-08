import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class WeatherService {
  constructor(private http: HttpClient) {}

  //get request  get the weather info from  the specified endpoint
  getWeather(lat, lon) {
    let url =
      'https://weatherapimoftah.herokuapp.com/home/weather?lat=' +
      +lat +
      '&lon=' +
      lon;
    return this.http.get<string>(url).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
