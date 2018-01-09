import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RestApiService} from "../../../services/RestApiService";
import {Book} from "../../../model/BookModel";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  httpService: RestApiService;

  bookID : number;
  private bookModel: Book;

  modalBoolean : boolean;

  @ViewChild('picker') picker;
    myMinDate: Date;

  constructor(route : ActivatedRoute, httpService : RestApiService) {
    console.log('book');
    this.httpService = httpService;
    this.bookID = route.snapshot.params['id'];
    // this.bookModel :Book = new Book();
    this.modalBoolean = false;
  }

  onClickModal(){
    if(this.modalBoolean === false){
      this.modalBoolean = true;
      return;
    }
    this.modalBoolean = false;
  }

  ngOnInit() {
    this.onLoad();
  }

  onLoad(){
    this.httpService.getBookDetail(this.bookID).subscribe(
      res => (
      this.bookModel = res,
        console.log(this.bookModel)
    ),
      error => alert('음 서버 상태가 메롱하네요.. 다시 시도해보세요')
    );
  }


  notFunction() {
    alert('구현 안됨');
  }

}
