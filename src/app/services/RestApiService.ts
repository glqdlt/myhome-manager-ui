import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../model/BookModel";
import {environment} from "../../environments/environment";

@Injectable()
export class RestApiService {

    private URL: string;


    constructor(private httpClient: HttpClient,) {
        this.URL = environment.apiUrl;
        console.log(`this.URL : ${this.URL}`);
    }


    getBookPage(page: number): any {
        return this.httpClient.get(this.URL + '/book/search/' + page);
    }

    getBookDetail(id: number): any {
        return this.httpClient.get(this.URL + '/book/detail/' + id);
    }

    putBook(book: Book) {
        return this.httpClient.put(this.URL + '/book/write', book);
    }

    getCrawPage(page: number): any {
        return this.httpClient.get(this.URL + '/craw/search/' + page);
    }

}
