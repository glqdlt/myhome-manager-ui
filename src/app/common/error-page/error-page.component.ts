import {Component, Input, OnDestroy, OnInit} from "@angular/core";

@Component({
    template: `
        <div class="w3-container" [style.display]="isHiding ? 'block':'none'" class="w3-modal">
            <div class="w3-modal-content">
                <div class="w3-container">
                    <h2>Sorry.. Server is Problem..</h2>
                    <button routerLink="/" class="w3-button w3-red">Go Home</button>
                </div>
            </div>
        </div>
    `,
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