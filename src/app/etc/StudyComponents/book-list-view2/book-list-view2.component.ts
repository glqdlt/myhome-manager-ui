import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-book-list-view2',
  templateUrl: './book-list-view2.component.html',
  styleUrls: ['./book-list-view2.component.css']
})
export class BookListView2Component implements OnInit {
  title : string;
  DATE_FORMAT = 'yyyy.MM.dd HH:mm:ss';

  constructor() {
    this.title = 'Book List All';
    this.onLoad();
  }

  ngOnInit() {
    // this.onLoad();
  }


  reLoad() {

  }

  onLoad(){
  }


  clearAll() {
  }
}
