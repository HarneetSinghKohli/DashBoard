import { Component, OnInit } from '@angular/core';
import { CommunicationService1 } from '../environment/cbs-3.x/env-pf2/3x1.service';
import {HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  arr1 = ["3.x", "4.1", "4.2", "4.3"];
  arr2 = [2, 3, 3, 3];
  stab_data = [];
  count_array=[];
communication=[];
  constructor(private svc: CommunicationService1) { }

  ngOnInit() {
    this.svc.getJson().subscribe(envStats => {
      if (envStats && envStats.length > 0) {
        envStats.forEach((envStat, index) => this.stab_data[index] = envStat.Stream);
        
        
        
        
        console.log("The values are " + this.stab_data.length);
       this.count_array.push(this.stab_data.length);
        console.log("New array" +this.count_array);

        envStats.forEach((envStat, index) => this.communication[index] = envStat.Communication);
        console.log("The values are " + this.communication.length);
        this.count_array.push(this.communication.length);
        console.log("New array" +this.count_array);
      }
     
    });
    // var propCount = JSON.parse(db);
    // console.log(propCount.Stream);
    // // fetchFromServer() {
    //   this.myhttp1.get('http://localhost:3000/Employee').subscribe(res => this.SuccessGet(res), res => this.Error(res));
    // }
}
}
