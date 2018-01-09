import {Component, OnInit} from '@angular/core';
import {SpinnerService} from "../../services/SpinnerService";

@Component({
    selector: 'app-home',
    templateUrl: './home-component.html',
    styleUrls: ['./home-component.css']
})
export class HomeComponentComponent implements OnInit {

    constructor(private spinnerService: SpinnerService) {
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
