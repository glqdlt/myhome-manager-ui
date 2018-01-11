import {Component, OnInit} from "@angular/core";
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from "@angular/router";
import {NgProgress} from "@ngx-progressbar/core";

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',

})
export class ProgressBarComponent implements OnInit {
    public isViewable = true;

    constructor(private router : Router,  private progressbar: NgProgress) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.progressbar.start();
                // this.isViewable = true;

            } else if ( event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
                this.progressbar.done();
                // this.isViewable = false;
            }
        }, () => {
            // this.isViewable = false;
            this.progressbar.done();
        });
    }

    ngOnInit(): void {
    }
}