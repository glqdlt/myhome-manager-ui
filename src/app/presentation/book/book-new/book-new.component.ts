import {Component} from "@angular/core";
import {Location} from "@angular/common";

@Component({
    templateUrl : './book-new.component.html'
})
export class BookNewComponent{


    constructor(private _location : Location) {

    }

    clickBack() {
        this._location.back();
    }
}