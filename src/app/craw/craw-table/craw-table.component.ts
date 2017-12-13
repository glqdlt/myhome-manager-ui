import {Component, OnInit} from "@angular/core";
import {Craw} from "../CrawModel";


@Component({
    selector: 'app-craw-table',
    templateUrl: './craw-table.component.html',
    styles: ['']
})
export class CrawTableComponent implements OnInit {

    crawData: Craw;

    ngOnInit() {

    }

}