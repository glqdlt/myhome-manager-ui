import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-book-list-view',
  templateUrl: './book-list-view.component.html',
  styleUrls: ['./book-list-view.component.css']
})
export class BookListViewComponent implements OnInit {

  title;

  dummyData: object[];
  DATE_FORMAT = 'yyyy.MM.dd HH:mm:ss';

  constructor() {

    this.title = 'Book list!';
  }

  ngOnInit() {
  }

}
