import { Component, OnInit } from '@angular/core';
import { communicationServiceEnvIm3 } from './env-im3.service';
import { CommunicationService1 } from 'src/app/environment/cbs-3.x/env-pf2/3x1.service';
import { EnvironmentModel } from 'src/app/environment/cbs-3.x/model/environment.model';
import { EnvironmentStatisticsModel } from 'src/app/environment/cbs-3.x/model//environment-statistics.model';
import { EnvironmentCommunicationModel } from 'src/app/environment/cbs-3.x/model//environment-communication.model';
import { Chart } from 'chart.js';
//import { Data } from './data';
@Component({
    selector: 'app-env-im3',
    templateUrl: './env-im3.component.html',
    styleUrls: ['./env-im3.component.css'],
    //providers: [communicationServiceEnvIm3]
})
export class EnvIm3Component implements OnInit {
    private communicationData: any;
    private stabilityData: any;
    title = 'chartjs';
    LineChart = [];
    PieChart = [];
    time_data = [];
    stab_data = [];
    c_data = [];
    env_data = [];
    env;
    EnvironmentModel: EnvironmentModel[] = [];
    EnvironmentStatisticsModel: EnvironmentStatisticsModel[] = [];
    EnvironmentCommunicationModel: EnvironmentCommunicationModel[] = [];
    url = "http://localhost:3000/streamPF2_data";
    url1 = "http://localhost:3000/stream_PF2_communication";
    url_stream_M3 = "http://localhost:3000/stream_M3";

    lineChart = "lineChart-im3";
    piechart = "pieChart-im3";


    constructor(private svc: CommunicationService1) { }

    ngOnInit() {
        this.getEnvName(this.url_stream_M3);
        this.getAreaChartData(this.url, this.lineChart)
        this.getCommunicationData(this.url1);
        this.getPieChartData(this.piechart);
    }

    getEnvName(url) {
        this.svc.getEnvValue(url).subscribe((data: EnvironmentModel[]) => {
            this.EnvironmentModel = data;
            console.log("getEnvName" + JSON.stringify(this.EnvironmentModel));
            if (this.EnvironmentModel && this.EnvironmentModel.length > 0) {
                this.EnvironmentModel.forEach((envStat, index) => this.env_data[index] = envStat.Stream);
                this.env = this.env_data[0];

            }
        });
    }

    getAreaChartData(url, lineChart) {
        this.svc.getDatavalue(url).subscribe((data: EnvironmentStatisticsModel[]) => {
            this.EnvironmentStatisticsModel = data;
            console.log("DateValues" + JSON.stringify(this.EnvironmentStatisticsModel));

            if (this.EnvironmentStatisticsModel && this.EnvironmentStatisticsModel.length > 0) {
                this.EnvironmentStatisticsModel.forEach((envStat, index) => this.stab_data[index] = envStat.status);
                console.log("The values for taf are " + this.stab_data);
                this.EnvironmentStatisticsModel.forEach((envStat, index) => this.time_data[index] = envStat.timeStamp);
                console.log("The values for taf are " + this.time_data);



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

    getCommunicationData(url) {
        this.svc.getCommunicationData(url).subscribe((commData: EnvironmentCommunicationModel[]) => {
            this.EnvironmentCommunicationModel = commData;
            console.log("DateValues" + JSON.stringify(this.EnvironmentCommunicationModel));

            if (this.EnvironmentCommunicationModel.length > 0) {
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


        //Service calling for 24h Communication data
        //   this.svc.getCommunicationData().subscribe(data => {
        //       this.communicationData = data;
        //   });
        //Service calling for Stability Stream data
        // this.svc.getStreamStabilityData().subscribe(data => {
        //     this.stabilityData = data;
        //})

        //THis is used to get data for Y axis in Area chart
        // this.svc.getStreamStabilityData().subscribe(data => this.data = data);

//         this.svc.getStreamStabilityData().subscribe(envStats => {
//             if (envStats && envStats.length > 0) {
//                 envStats.forEach((envStat, index) => this.stab_data[index] = envStat.status);
//                 envStats.forEach((envStat, index) => this.time_data[index] = envStat.timeStamp);
//             }
//         });

//         this.svc.getCommunicationData().subscribe(commData => {
//             if (commData.length > 0) {
//                 commData.forEach((commdata, index) => this.c_data[index] = commdata.communication);
//                 console.log(commData.forEach((commdata, index) => this.c_data[index] = commdata.communication));
//             }
//         })

//         //Area Chart Code
//         this.LineChart = new Chart('lineChart-im3', {
//             type: 'line',
//             data: {
//                 labels: this.time_data,
//                 datasets: [{
//                     label: 'Up Time',
//                     data: this.stab_data,
//                     fill: true,
//                     lineTension: 0.2,
//                     borderColor: "red",
//                     borderWidth: 1

//                 }]

//             },
//             options: {
//                 title: {
//                     //text:"Area Chart",
//                     display: true
//                 },
//                 scales: {
//                     yAxes: [{
//                         ticks: {
//                             beginAtZero: true,
//                             borderWidth: 1,
//                         }
//                     }]
//                 }
//             }
//         });

//         //Pie chart for Time
//         this.PieChart = new Chart('pieChart-im3', {
//             type: 'pie',
//             data: {
//                 // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//                 datasets: [{
//                     label: '# of Votes',
//                     data: [9, 7, 3, 5, 2, 10],
//                     backgroundColor: [
//                         'rgba(255, 99, 132, 0.2)',
//                         'rgba(54, 162, 235, 0.2)',
//                         'rgba(255, 206, 86, 0.2)',
//                         'rgba(75, 192, 192, 0.2)',
//                         'rgba(153, 102, 255, 0.2)',
//                         'rgba(255, 159, 64, 0.2)'
//                     ],
//                     borderColor: [
//                         'rgba(255,99,132,1)',
//                         'rgba(54, 162, 235, 1)',
//                         'rgba(255, 206, 86, 1)',
//                         'rgba(75, 192, 192, 1)',
//                         'rgba(153, 102, 255, 1)',
//                         'rgba(255, 159, 64, 1)'
//                     ],
//                     borderWidth: 1
//                 }]
//             },
//             options: {
//                 title: {
//                     //  text: "Pie Chart",
//                     display: true
//                 },
//                 scales: {
//                     yAxes: [{
//                         ticks: {
//                             beginAtZero: true
//                         }
//                     }]
//                 }
//             }
//         });

//     }
// }
