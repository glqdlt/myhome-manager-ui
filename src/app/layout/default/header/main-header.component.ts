import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {menuEntries} from "../menuEntries";

import * as $ from 'jquery';


@Component({
    selector: 'app-header',
    templateUrl: './main-header.component.html',
    styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
    HEADER_TEXT: string = 'MyHome Management';
    userName: string = 'Admin';

    private menuEntries: any[];

    constructor(private router: Router) {
        this.menuEntries = menuEntries;
    }

    ngOnInit(): void {
    }

    logout() {
        localStorage.clear();
        console.log('clear');
        this.router.navigate(['login']);
    }


    clickToggle(area: HTMLElement) {
        let subMenu = $(area).find('.sub-menu');
        if (subMenu.css('display') === 'none') {
            subMenu.css('display', 'block');
        }else{
            subMenu.css('display', 'none');
        }

    }
}