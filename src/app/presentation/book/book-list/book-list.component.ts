import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {Subscription} from "rxjs/Subscription";
import {Book} from "../../../model/BookModel";
import {RestApiService} from "../../../services/RestApiService";
import {SpinnerService} from "../../../services/SpinnerService";

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
    // DATE_FORMAT = 'yyyy.MM.dd HH:mm:ss';
    DATE_FORMAT = 'yyyy.MM.dd';
    TITLE: string = 'Book Manager';

    bookModel: Book[];
    nowPage: number;
    totalPage: number;
    maxPage: number;
    pagingRange;

    modalBoolean: boolean;
    private subscribe: Subscription;
    p: number;


    constructor(private restApiService: RestApiService, private spinnerService : SpinnerService) {
        // this.setFirstPageNumb();
        this.modalBoolean = false;
        this.nowPage = 0;
        this.maxPage = 9;

    }

    ngOnInit() {
        // Observable.timer(timer, period);
        // 10 seconds loop
        this.subscribe = Observable.timer(0, 10000).subscribe(x => this.onLoad(this.nowPage), err => console.log(`err : ${{err}}`));
    }

    ngOnDestroy(): void {
        this.subscribe.unsubscribe();
        this.spinnerService.stop();
    }

    onLoad(nowPage: number) {

        this.restApiService.getBookPage(nowPage)
            .do(
                (this.spinnerService.start())
            )
            .subscribe(
            result => (
                this.spinnerService.stop(),
                this.bookModel = result['data'],
                    this.totalPage = result['totalPage'],
                    this.pagingMaker(this.totalPage),
                    this.modalBoolean = false
            ),
            error => (console.error(`May be Server is Die.`), this.modalBoolean = true)
        )
    };

    // clearAll() {
    //     this.bookModel = null;
    // };

    onClickPaging(numb: number) {
        this.nowPage = numb;
        this.onLoad(this.nowPage);
    }

    private pagingMaker(total: number) {
        const range = Array();
        for (let i = 0; i < total; i++) {
            range.push(i);
        }
        this.pagingRange = range;
    }
}

