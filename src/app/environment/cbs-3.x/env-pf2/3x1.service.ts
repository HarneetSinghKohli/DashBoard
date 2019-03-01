import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { ICommunication } from './communication';
import { Observable, of } from 'rxjs';
import { EnvironmentModel } from '../model/environment.model';
import { EnvironmentStatisticsModel } from '../model/environment-statistics.model';
import { EnvironmentCommunicationModel } from '../model/environment-communication.model';
@Injectable({
	providedIn: 'root'
})
export class CommunicationService1 {

	//private _url = "D:/New folder (2)/my-app/src/assets/src/assets/cofig.json"
	//private json_url="http://localhost:3000/posts2";
	private json_url="http://localhost:3000/env";
	constructor(private http:HttpClient){
		 this.getJson().subscribe(data=>{
			//console.log("Hiiii"+data);
		//this.getJson().subscribe(data=>{console.log(data.length);

	});
	
}
	  getJson():Observable<any>{
		return this.http.get(this.json_url);
	}

	 getCommunicationData(url): Observable<EnvironmentCommunicationModel[]> {
		
		return this.http.get<EnvironmentCommunicationModel[]>(url);
	 }
	getDatavalue(url): Observable<EnvironmentStatisticsModel[]> {
      
        return this.http.get<EnvironmentStatisticsModel[]>(url);
    }

	getEnvValue(url):Observable<EnvironmentModel[]>{
		return this.http.get<EnvironmentModel[]>(url);
	}

}
