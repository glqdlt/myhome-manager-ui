import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class SpinnerService {
    private _asyncCounter: boolean = false;
    private _loading$: EventEmitter<boolean> = new EventEmitter();

    constructor() {
        this._loading$.emit(false);
    }

    getLoading$() {
        return this._loading$;
    }

    start() {
        if (this._asyncCounter === false) this._loading$.emit(true);
        this._asyncCounter = true;
    }

    stop() {
        if (this._asyncCounter === true) this._loading$.emit(false);
        this._asyncCounter = false;
    }
}