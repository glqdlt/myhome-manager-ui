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
    private subscribe: Subscription;

    isHiding : boolean = false;

    //TODO Ngx-pagination 은 api에서 모든 all 데이터를 받아와서 client에서 paging 처리하는 것이다. 만약 전체 데이터가 1gb 라면 어떻게 되는거지? 이건 좀..
    constructor(private restApiService: RestApiService, private spinnerService: SpinnerService, private progressbar: NgProgress, private router : Router) {
        // this.setFirstPageNumb();
        this.modalBoolean = false;
        this.nowPage = 1;

    }

    ngOnInit() {
        // Observable.timer(timer, period);
        // 10 seconds loop
        this.subscribe = Observable.timer(0, 10000).subscribe(x => this.onLoad(this.nowPage), err => console.log(`err : ${{err}}`));
    }

    ngOnDestroy(): void {
        this.subscribe.unsubscribe();
    }


    // TODO Async / await 으로 restApiService 를 구현해야한다.
     onLoad(nowPage: number) {
        nowPage--;
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
    };

    // clearAll() {
    //     this.bookModel = null;
    // };

    currentSync($event: number) {
        this.nowPage = $event;
        this.onLoad(this.nowPage);
    }
}


