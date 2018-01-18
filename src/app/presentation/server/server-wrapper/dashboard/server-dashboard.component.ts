import {Component} from "@angular/core";

@Component({
    templateUrl : './server-dashboard.component.html'
})
export class ServerDashboardComponent {

    data: any;
    data2: any;


    constructor() {


        this.data = {
            labels: ['Use','Free','Cache'],
            max: 155+10+2,
            datasets: [
                {
                    data: [155, 10, 2],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
        };

        this.data2 = {
            labels: ['Use','Free','Cache'],
            max: 30+150+12,
            datasets: [
                {
                    data: [30, 150, 12],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
        };
    }
}