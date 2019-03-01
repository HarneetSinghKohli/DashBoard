import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { dataModel } from '../model/data.model';
@Injectable({
	providedIn: 'root'
})

export class detailsService{
    private json_url="http://localhost:3000/env";
    constructor(private http:HttpClient){
        this.getJson().subscribe(data=>{

        });
    }
    getJson():Observable<any>{
		return this.http.get(this.json_url);
    }

    getData(url):Observable<dataModel[]>{
        return this.http.get<dataModel[]>(url);
    }
    

} 