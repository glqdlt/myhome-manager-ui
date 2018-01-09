import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";


@Component({
    selector: 'app-header',
    templateUrl: './main-header.component.html',
    styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
    HEADER_TEXT: string = 'MyHome Management';
    userName: string = 'Admin';


    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    logout() {
        localStorage.clear();
        console.log('clear');
        this.router.navigate(['login']);
    }
}