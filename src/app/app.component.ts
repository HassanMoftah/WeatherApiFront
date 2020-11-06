import { Component, OnInit } from '@angular/core';
import { MDWheather } from 'src/Models/MDWheather.model';
import { WheatherService } from './WheatherService.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'WheatherApp';
  lat;
  lng;
  weather:MDWheather=new MDWheather();
  Loading:boolean=true;
  constructor(private WheatherSRV:WheatherService){}
  ngOnInit(): void {
  
    navigator.geolocation.getCurrentPosition((position)=>{
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.getWheather(this.lat,this.lng);
     
},()=>{
     alert('User not allowed To Access His Location')
},{timeout:10000})
  }

  getWheather(lat,lng){
     this.WheatherSRV.GetWheather(lat,lng).subscribe(res=>{
       this.weather= JSON.parse(res);
       this.Loading=false;

     },err=>{this.Loading=false; alert(err);});
  }

}
