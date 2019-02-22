import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { ICommunication } from './communication';
import { Observable,of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CommunicationService{
    
   private _url = "D:/New folder (2)/my-app/src/assets/src/assets/cofig.json"
    constructor(private http: HttpClient) {
        this.getCommunicationData().subscribe(data => {
            console.log(data);
        });
    }
    public getCommunicationData(): Observable<any> {
         //return this.http.get(this._url);
           //let test = require("config.json");
           //return this.http.get(test);
       return of([{
           value: "Value"
       }]);
    }

    public getStreamStabilityData(): Observable<number[]>{
        return of([10,20,30,50]);
    }
    
}
