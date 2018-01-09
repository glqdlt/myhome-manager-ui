import {Component, OnInit} from "@angular/core";
import {menuEntries} from "./menuEntries";

@Component({
    templateUrl : './default.component.html',
    styleUrls : ['./default.component.css']
})
export  class  DefaultComponent implements  OnInit{
    private menuEntries: any[];

    constructor() {
        this.menuEntries = menuEntries;

    }

    ngOnInit() {
    }
}