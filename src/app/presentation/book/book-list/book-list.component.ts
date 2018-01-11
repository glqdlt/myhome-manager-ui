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

    bookModel: Book[];
    nowPage: number;
    totalPage: number;
    pagingRange;
    pageViewMax: number = 5;
    modalBoolean: boolean;
    private subscribe: Subscription;

    //TODO Ngx-pagination 은 api에서 모든 all 데이터를 받아와서 client에서 paging 처리하는 것이다. 만약 전체 데이터가 1gb 라면 어떻게 되는거지? 이건 좀..
    constructor(private restApiService: RestApiService, private spinnerService: SpinnerService) {
        // this.setFirstPageNumb();
        this.modalBoolean = false;
        this.nowPage = 0;

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
                        this.paginationBuilder(),
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

    private paginationBuilder() {
        if (this.totalPage === 0) {
            return;
        }
        const range = Array();
        if (this.totalPage !== 1) {
            range.push(0);
        }
        let centerNumb = Math.floor(this.pageViewMax / 2);
        let left = this.nowPage - centerNumb;
        let right = this.nowPage + centerNumb;
        if (left <= 0) {
            right = right - left;
        }
        if(right > this.totalPage){
            left =  left + (this.totalPage - right);
        }
        for (let i = left; i < right; i++) {
            if (i <= 0) {

            } else if (i >= this.totalPage - 1) {

            } else {
                range.push(i);
            }
        }
        range.push(this.totalPage - 1);
        this.pagingRange = range;
    }

    prevItem() {
        if (this.nowPage <= 0) {
            return;
        }
        this.nowPage--;
        this.onLoad(this.nowPage);
    }

    nextItem() {
        if (this.nowPage >= (this.totalPage- 1 )) {
            return;
        }
        this.nowPage++;
        this.onLoad(this.nowPage);


    }
}


