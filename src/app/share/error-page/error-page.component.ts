import {Component, Input, OnDestroy, OnInit} from "@angular/core";

@Component({
    templateUrl: './error-page.component.html',
    selector: 'app-error-page'
})
export class ErrorPageComponent implements OnInit, OnDestroy {

    @Input() isHiding: boolean;

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }

    constructor() {

    }
}