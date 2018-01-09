import {Component, OnInit} from "@angular/core";

@Component({
    selector : 'app-footer',
    templateUrl : './footer.component.html',
    styleUrls : ['/footer.component.css']
})

export class FooterComponent implements  OnInit{
    copySymbol : string;
    copyrightYear: number;
    ngOnInit(): void {
    }


    constructor() {
        this.copyrightYear = new Date().getFullYear();
        this.copySymbol = '&copy;';
    }
}