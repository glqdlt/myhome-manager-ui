import {Component, OnInit} from "@angular/core";


@Component({
    selector: 'app-header',
    templateUrl: './main-header.component.html',
    styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
    HEADER_TEXT: string = 'MyHome Management';
    userName: string = 'Admin';
    ngOnInit(): void {
    }

}