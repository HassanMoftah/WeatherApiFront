import { HttpClient, HttpErrorResponse, HttpHeaders, } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({providedIn:'root'})
export class WheatherService{
     constructor(private http:HttpClient){}

     GetWheather(lat,lng){
         let url="https://weatherapimoftah.herokuapp.com/home/whether?lat="+lat+"&lng="+lng;

        return  this.http.get<string>(url).pipe(catchError(this.handleError));
        }
     
     handleError(error:HttpErrorResponse){
       return   throwError(error);
     }
}