import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector : 'app-pie-chart',
    templateUrl : './pie-chart.component.html',
})
export class PieChartComponent implements OnInit{


    @Input() data : any;

    options : any;

    constructor() {
        this.options ={
            title : {
                display : true,
                text : 'My Title',
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

    ngOnInit(): void {

    }


    onDataSelect(event){
    }
}