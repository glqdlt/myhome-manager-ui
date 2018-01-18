import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector : 'app-pie-chart',
    templateUrl : './pie-chart.component.html',
})
export class PieChartComponent implements OnInit{


    @Input() data : any;
    @Input('chart-title') chartTitle : string = 'Simple Chart';

    options : any;

    constructor() {
    }

    ngOnInit(): void {
        this.options ={
            title : {
                display : true,
                text : this.chartTitle,
                fontSize : 16
            },
            legend : {
                position : 'bottom'
            },
            labels : {
                fontSize: 2
            }

        }
    }


    onDataSelect(event){
    }
}