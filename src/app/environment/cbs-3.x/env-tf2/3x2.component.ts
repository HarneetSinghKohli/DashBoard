import { Component, OnInit } from '@angular/core';
import { CommunicationService2 } from './3x2.service';
import { ICommunication } from '../communication';
import { Chart } from 'chart.js';
import { Data } from '../data';
import { CommunicationService1 } from '../env-pf2/3x1.service';
import { EnvironmentModel } from '../model/environment.model';
import {EnvironmentStatisticsModel} from '../model/environment-statistics.model';
import {EnvironmentCommunicationModel} from '../model/environment-communication.model';
import {Env3xComponent1} from '../env-pf2/3x1.component'
@Component({
    selector: 'app-env3x2',
    styleUrls: ['./3x2.component.css'],
    templateUrl: './3x2.component.html',
    providers: [CommunicationService2]

})

export class Env3xComponent2 implements OnInit {
    private communicationData2: any;
    private stabilityData: any;
    title = 'chartjs';
    LineChart = [];
    PieChart = [];
    time_data = [];
    stab_data=[];
    c_data=[];
    env_data=[];
    env;
    EnvironmentModel: EnvironmentModel[] = [];
    EnvironmentStatisticsModel: EnvironmentStatisticsModel[] = [];
    EnvironmentCommunicationModel : EnvironmentCommunicationModel[] = [];
    url = "http://localhost:3000/streamTF2_data";
    url1="http://localhost:3000/stream_PF2_communication";
    url_streamF2="http://localhost:3000/stream_F2";

    lineChart = "lineChart-tf2";
    piechart="pieChart-tf2";
    constructor(private svc: CommunicationService1) { }

    ngOnInit() {
        this.getEnvName(this.url_streamF2);
        this.getAreaChartData(this.url, this.lineChart)
        this.getCommunicationData(this.url1);
        this.getPieChartData(this.piechart);
       
    
    }

    getEnvName(url){
        this.svc.getEnvValue(url).subscribe((data:EnvironmentModel[]) =>{
            this.EnvironmentModel=data;
            console.log("getEnvName"+JSON.stringify(this.EnvironmentModel));
            if (this.EnvironmentModel && this.EnvironmentModel.length > 0) {
                this.EnvironmentModel.forEach((envStat, index) => this.env_data[index] = envStat.Stream);
               this.env=this.env_data[1];
            }
        });
    }

    getAreaChartData(url, lineChart) {
        this.svc.getDatavalue(url).subscribe((data: EnvironmentStatisticsModel[]) => {
            this.EnvironmentStatisticsModel = data;
            console.log("DateValues" + JSON.stringify(this.EnvironmentStatisticsModel));

            if (this.EnvironmentStatisticsModel && this.EnvironmentStatisticsModel.length > 0) {
                this.EnvironmentStatisticsModel.forEach((envStat, index) => this.stab_data[index] = envStat.status);
                console.log("The values are " + this.stab_data);
                this.EnvironmentStatisticsModel.forEach((envStat, index) => this.time_data[index] = envStat.timeStamp);
                console.log("The values are " + this.time_data);



                this.LineChart = new Chart(lineChart, {
                    type: 'line',
                    data: {
                        labels: this.time_data,
                        datasets: [{
                            label: '24 hours(HHMM) Up Time',
                            data: this.stab_data,
                            fill: true,
                            lineTension: 0.2,
                            borderColor: "red",
                            borderWidth: 1

                        }]

                    },
                    options: {
                        legend: {
                            position: 'bottom'
                        },
                        title: {
                            //text:"Area Chart",
                            display: true
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                }
                            }]
                        }
                    }
                });



            }
        });
    }

    getCommunicationData(url){
        this.svc.getCommunicationData(url).subscribe((commData: EnvironmentCommunicationModel[])=> {
            this.EnvironmentCommunicationModel=commData;
            console.log("DateValues"+JSON.stringify(this.EnvironmentCommunicationModel));
           
            if (this.EnvironmentCommunicationModel.length>0) {
                this.EnvironmentCommunicationModel.forEach((envStat, index) => this.c_data[index] = envStat.communication);
                console.log("The communication values are " + this.c_data);
              
            }
        })
    }

    getPieChartData(piechart) {
        this.PieChart = new Chart(piechart, {
            type: 'pie',
            data: {
                labels: ["OK", "KO"],
                datasets: [{
                    label: '# of Votes',
                    
                    data: [9, 7],                    
                    backgroundColor: [
                        'rgb(0,128,0)',
                        'rgb(255,0,0)'
                        ,
                       
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                       
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                title: {
                    //  text: "Pie Chart",
                    display: true
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

    }
}