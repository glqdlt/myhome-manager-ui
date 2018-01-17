import {Component} from "@angular/core";

@Component({
    templateUrl : './server-dashboard.component.html'
})
export class ServerDashboardComponent {

    data: any;


    constructor() {
        this.data = {
            labels: ['Use','Free','Cache'],
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
    }
}