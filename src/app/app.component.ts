import { Component, OnInit } from '@angular/core';
import { MDWeather } from 'src/Models/MDWeather.model';
import { WeatherService } from './WeatherService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';
  weather: MDWeather = new MDWeather(); // model will hold the weather info form the server
  Loading: boolean = true;

  constructor(private WeatherSRV: WeatherService) {}

  ngOnInit(): void {
    //get  location  of the user 'latitude and longitude'
    navigator.geolocation.getCurrentPosition(
      (position) => {
        //call getWeather function with latitude and longitude as paramaters
        this.getWeather(position.coords.latitude, position.coords.longitude);
      },
      () => {
        // alert  if the latitude and longitude  not accessble
        alert('User not allowed To Access His Location');
      },
      { timeout: 10000 }
    );
  }

  getWeather(lat, lon) {
    //call get weather form the weather service  with latitude and longitude as paramters
    this.WeatherSRV.getWeather(lat, lon).subscribe(
      (res) => {
        this.weather = JSON.parse(res);
        this.Loading = false;
      },
      (err) => {
        this.Loading = false;
        console.log(err);
        alert(err);
      }
    );
  }
}
