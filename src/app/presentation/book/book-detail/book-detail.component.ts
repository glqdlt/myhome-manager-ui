import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RestApiService} from "../../../services/RestApiService";
import {Book} from "../../../model/BookModel";
import {FormModel} from "../form-editor/FormModel";

@Component({
    selector: 'app-book-detail',
    templateUrl: './book-detail.component.html',
    styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
    httpService: RestApiService;

    bookID: number;
    private bookModel: Book;

    modalBoolean: boolean;

    editMode: FormModel = {isEdit: true, data: undefined};
    changeMode: boolean =false;

    constructor(route: ActivatedRoute, httpService: RestApiService) {
        this.httpService = httpService;
        this.bookID = route.snapshot.params['id'];
        // this.bookModel :Book = new Book();
        this.modalBoolean = false;
    }


    ngOnInit() {
        this.onLoad();
    }

    onLoad() {
        this.httpService.getBookDetail(this.bookID).subscribe(
            res => (
                this.bookModel = res,
                    this.editMode.data = res,
                    console.log(`res: ${res.toString()},editMode :${this.editMode.toString()}`),
                    console.log('aaaa')
            ),
            error => alert('음 서버 상태가 메롱하네요.. 다시 시도해보세요')
        );

    }


}
