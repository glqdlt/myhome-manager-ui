import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {Subscription} from "rxjs/Subscription";
import {Book} from "../../../model/BookModel";
import {RestApiService} from "../../../services/RestApiService";
import {SpinnerService} from "../../../services/SpinnerService";
import {NgProgress} from "@ngx-progressbar/core";
import {Router} from "@angular/router";

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
    // DATE_FORMAT = 'yyyy.MM.dd HH:mm:ss';
    DATE_FORMAT = 'yyyy.MM.dd';

    bookModel: Book[];
    nowPage: number;
    totalPage: number;
    modalBoolean: boolean;
    tableStyle;
    private subscribe: Subscription;

    isHiding : boolean = false;

    constructor(private restApiService: RestApiService, private spinnerService: SpinnerService, private progressbar: NgProgress, private router : Router) {
        this.modalBoolean = false;
        this.nowPage = 0;

        this.tableStyle = {pagerLeftArrow: 'pager'};

    }

    ngOnInit() {
        // Observable.timer(timer, period);
        // 10 seconds loop
        this.subscribe = Observable.timer(0, 10000).subscribe(x => this.onLoad(this.nowPage), err => console.log(`err : ${{err}}`));
    }

    ngOnDestroy(): void {
        this.subscribe.unsubscribe();
    }

     onLoad(nowPage: number) {
         this.restApiService.getBookPage(nowPage)
            .do(
                (this.progressbar.start())
            )
            .subscribe(
                result => (
                        this.bookModel = result['data'],
                        this.totalPage = result['totalPage'],
                        this.modalBoolean = false
                ),
                error => (console.error(error),
                    this.isHiding = true
                    // this.router.navigateByUrl('/error/offline')
                ),
                done => (this.progressbar.done(), this.spinnerService.stop())
            )
    }

    sync($event) {
        this.nowPage = $event.offset;
        this.dataSync(this.nowPage);
    }

    dataSync(now) {
        this.fetch((now), (data) => {
            this.bookModel = data['data'];
            this.totalPage = data['totalPage'];
        });
    }

    fetch(nowPage, callback) {
        const now: number = (nowPage);
        this.restApiService.getBookPage(now).subscribe(res => (callback(res)), err => console.error(err)
        );
    }
}


