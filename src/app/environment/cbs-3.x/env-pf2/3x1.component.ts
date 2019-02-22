import { Component, OnInit } from '@angular/core';
import {CommunicationService1 } from './3x1.service';
import { ICommunication } from '../communication';
import { Chart } from 'chart.js';
import { Data } from '../data';
@Component({
    selector: 'app-env3x1',
    styleUrls: ['./3x1.component.css'],
    templateUrl: './3x1.component.html',
    providers: [CommunicationService1]

})

export class Env3xComponent1 implements OnInit {
    private communicationData1: any;
    private stabilityData: any;
    title = 'chartjs';
    LineChart = [];
    PieChart = [];
    time_data = [];
    stab_data=[];
    c_data=[];

    constructor(private svc: CommunicationService1) { }

    ngOnInit() {
        //Service calling for 24h Communication data
        // this.svc.getCommunicationData().subscribe(data => {
        //     this.communicationData1 = data;
        // });
        //Service calling for Stability Stream data
       // this.svc.getStreamStabilityData().subscribe(data => {
       //     this.stabilityData = data;
        //})

        //THis is used to get data for Y axis in Area chart

        this.svc.getJson().subscribe(envStats =>  {
            if(envStats && envStats.length > 0){
                envStats.forEach((envStat,index) => this.stab_data[index] = envStat.status);
                console.log("The values are "+this.stab_data);
                envStats.forEach((envStat,index) => this.time_data[index] = envStat.timeStamp);
                console.log("The values are "+this.time_data);


/////////////
this.LineChart = new Chart('lineChart1', {
    type: 'line',
    data: {
        labels: this.time_data,
        datasets: [{
            label: 'Up Time',
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

        // this.svc.getStreamStabilityData().subscribe(envStats =>  {
        //     if(envStats && envStats.length > 0){
        //         envStats.forEach((envStat,index) => this.stab_data[index] = envStat.status);
        //         envStats.forEach((envStat,index) => this.time_data[index] = envStat.timeStamp);
        //     }
        // });

        this.svc.getCommunicationData().subscribe(commData =>{
            if(commData.length>0){
                commData.forEach((commdata,index)=>this.c_data[index] =commdata.communication);
                console.log(commData.forEach((commdata,index)=>this.c_data[index] =commdata.communication));
            }
        })
        console.log("sdhfsd");
        console.log("The values are "+this.stab_data);
        console.log("The values are "+this.time_data);
        //Area Chart Code
        this.LineChart = new Chart('lineChart1', {
            type: 'line',
            data: {
                labels: this.time_data,
                datasets: [{
                    label: 'Up Time',
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

        //Pie chart for Time
        this.PieChart = new Chart('pieChart1', {
            type: 'pie',
            data: {
               // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [9, 7, 3, 5, 2, 10],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
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