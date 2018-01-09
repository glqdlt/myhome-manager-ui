import {Component, OnInit} from '@angular/core';
import {SpinnerService} from "../../services/SpinnerService";

@Component({
    selector: 'app-home',
    templateUrl: './home-component.html',
    styleUrls: ['./home-component.css']
})
export class HomeComponentComponent implements OnInit {
    p: number = 1;
    collection: any[];

    constructor(private spinnerService: SpinnerService) {

        this.collection = new Array();
        for(let i =0; i< 900; i++) this.collection.push(i);
    }

    ngOnInit() {
        this.spinnerService.stop();
    }

    spinnerOn() {
        this.spinnerService.start();
    }

    spinnerOff() {
        this.spinnerService.stop();
    }
}
