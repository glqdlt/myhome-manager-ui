import {Component, Input} from "@angular/core";

@Component({
    selector : 'app-error-global',
    template : `<router-outlet></router-outlet>`
})
export  class ErrorWrapperComponent{

    @Input() Title : string;

    constructor() {
        this.Title = 'Error';
    }
}