import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../model/BookModel";

export const BOOK_SEVER_URL :string = 'http://127.0.0.1:38080';


@Injectable()
export class RestApiService {

  private URL: string;


  constructor(private httpClient: HttpClient, ) {
    this.URL = BOOK_SEVER_URL;
  }


  getBookAll(): any {
    console.log(`url : ${this.URL}/book/search/all`);


    return this.httpClient.get(this.URL + '/book/search/all');
  }

  getBookPage(page:number): any {

    console.log(`url : ${this.URL}/book/search/page`);
    return this.httpClient.get(this.URL+'/book/search/'+page);
  }

  getBookDetail(id:number): any{
    return this.httpClient.get(this.URL+'/book/detail/'+id);
  }

  putBook(book : Book) {
    return this.httpClient.put(this.URL+'/book/write',book);
  }

}
