import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Book} from "../model/BookModel";

@Injectable()
export class InMomeryDatabaseService implements InMemoryDbService {


  private _database: any;

  createDb() {
    this._database = {};
    this.makeDummyData();
    return this._database;
  }

  private makeDummyData() {
    const dummyBookData: Book[] = [];
    this.createTable('books', dummyBookData);
  }


  constructor() {
  }

  private createTable(tableName: string, initialDate: any[]) {
    this._database = initialDate;

  }
}
