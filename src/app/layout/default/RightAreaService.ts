import {Injectable} from "@angular/core";

@Injectable()
export class RightAreaService {

    _closed: boolean;

    constructor() {
        this._closed = true;
    }

    get closed() {
        return this._closed;
    }

    set closed(c : boolean){
        this._closed = c;
    }
}
