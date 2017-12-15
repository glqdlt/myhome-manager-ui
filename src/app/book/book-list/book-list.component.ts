import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from "../../model/BookModel";
import {Observable} from "rxjs/Rx";
import {Subscription} from "rxjs/Subscription";
import {RestApiService} from "../../services/RestApiService";
import {FormBuilder} from "@angular/forms";

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


    constructor(private restApiService: RestApiService) {
        // this.setFirstPageNumb();
        this.modalBoolean = false;
        this.nowPage = 0;
        this.maxPage = 9;

    }

    ngOnInit() {
        // Observable.timer(timer, period);
        // 5 seconds loop
        this.subscribe = Observable.timer(0, 5000).subscribe(x => this.onLoad(this.nowPage), err => console.log(`err : ${{err}}`));
    }

    ngOnDestroy(): void {
        this.subscribe.unsubscribe();
    }

    onLoad(nowPage: number) {
        this.restApiService.getBookPage(nowPage).subscribe(
            result => (
                this.bookModel = result['data'],
                    this.totalPage = result['totalPage'],
                    this.pagingMaker(this.totalPage),
                    this.modalBoolean = false
            ),
            error => (console.error(`May be Server is Die.`), this.modalBoolean = true)
        )
    };

    clearAll() {
        this.bookModel = null;
    };

    alertEndPage() {
        alert('Page End');
    }

    pageUp() {
        if (this.nowPage + 1 >= this.totalPage) {
            this.alertEndPage();
            return;
        }
        this.nowPage++;
        this.onLoad(this.nowPage);
    }

    pageDown() {
        if (this.nowPage - 1 < 0) {
            this.alertEndPage();
            return;
        }
        this.nowPage--;
        this.onLoad(this.nowPage);
    }

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

