import { Component, OnInit } from '@angular/core';
import { dataModel } from '../model/data.model';
import { detailsService } from './env-pf2-detail.service'
@Component({
  selector: 'app-env-pf2-detail',
  templateUrl: './env-pf2-detail.component.html',
  styleUrls: ['./env-pf2-detail.component.css']
})


export class EnvPf2DetailComponent implements OnInit {
  url = "http://localhost:3000/checkbox_data";
  jobs_IAF_BE: dataModel[] = [];
  dataModel: dataModel[] = [];



  // jobs_IAF_BE=<data[]> [
  //   { id: 1, status: "ok", domain: "BM", url: "ur" },
  //   { id: 2, status: "ko", domain: "BM", url: "ur"  }
  // ];


  //filter = false;

  // onFilterChange(eve: any) {
  //   this.filter = !this.filter;
  // }


  constructor(private svc1: detailsService) { }
  public show: boolean = false;
  public buttonName: any = 'Show';
  ngOnInit() {
    this.getvalues(this.url);

  }
  toggle() {
    this.show = !this.show;
    if (this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  toggle1() {
    this.show = !this.show;
    if (this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  getvalues(url) {
    this.svc1.getData(url).subscribe((data: dataModel[]) => {
      this.dataModel = data;
      console.log("values are for detail page " + JSON.stringify(this.dataModel));
    });
  }

}
