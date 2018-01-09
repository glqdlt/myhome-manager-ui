import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {Subscription} from "rxjs/Subscription";
import {Router} from "@angular/router";

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit, OnDestroy {
    private subscribe: Subscription;
    redirectTime: number;
    uriPath: string;

    constructor(private router : Router) {
        this.redirectTime = 10;
        this.uriPath = router.url;
    }

    ngOnInit() : void{
        this.subscribe = Observable.timer(0, 1000).subscribe(x => this.leaveThisPage(), err => console.log(`err : ${{err}}`));
    }

    ngOnDestroy(): void {
        console.debug(`i'm Destroyed. T_T .. ByeBye`);
        this.subscribe.unsubscribe();
    }

    leaveThisPage() : void{
        if(this.redirectTime <= 0){
        console.debug(`Timer On : Go to Home`);
        this.router.navigate(['/']);
        return;
        }
        console.debug(`redirect time minus ==> ${this.redirectTime}`);
        this.redirectTime--;
    }
}
