import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { ICommunication } from './communication';
import { Observable,of } from 'rxjs';
import { EnvironmentStatisticsModel } from 'src/app/environment/cbs-3.x/model/environment-statistics.model';
import { EnvironmentCommunicationModel } from 'src/app/environment/cbs-3.x/model/environment-communication.model';
@Injectable({
    providedIn: 'root'
})
export class communicationServiceEnvTm3{
    
   private _url = "D:/New folder (2)/my-app/src/assets/src/assets/cofig.json"
    // constructor(private http: HttpClient) {
    //     this.getCommunicationData().subscribe(data => {
    //         console.log(data);
    //     });
    // }
    public getCommunicationData(): Observable<any> {
         //return this.http.get(this._url);
           //let test = require("config.json");
           //return this.http.get(test);
       return of([
        <EnvironmentCommunicationModel>{
            communication: "Harneet",
       }]);
    }

    public getStreamStabilityData(): Observable<EnvironmentStatisticsModel[]>{
        return of([
            <EnvironmentStatisticsModel>{
                //timeStamp: new Date(),
                timeStamp: 20180802073316,
                status: 1,
                total: 1,
            },
            <EnvironmentStatisticsModel>{
                timeStamp: 20180802074416,
                status: 0,
                total: 1,
            },
            <EnvironmentStatisticsModel>{
                timeStamp: 20180802075516,
                status: 1,
                total: 1,
            },
            <EnvironmentStatisticsModel>{
                timeStamp: 20180802083316,
                status: 0,
                total: 1,
            }]);
        
    }
    
}
