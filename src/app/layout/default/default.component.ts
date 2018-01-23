import {Component, OnInit} from "@angular/core";
import {menuEntries} from "./menuEntries";
import {RightAreaService} from "./RightAreaService";

@Component({
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

    isClosed: boolean;

    constructor(private rightAreaService: RightAreaService) {

    }

    ngOnInit() {
        this.isClosed = this.rightAreaService.closed;
    }

    changeClosed() {
        console.log(this.rightAreaService.closed);
        if(this.rightAreaService.closed === true){
            this.rightAreaService.closed = false;
            this.isClosed = false;
        }else{
            this.rightAreaService.closed = true;
            this.isClosed = true;
        }
    }
}