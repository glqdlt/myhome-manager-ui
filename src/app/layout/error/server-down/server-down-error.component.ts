import {Component, Input} from "@angular/core";

@Component({
    selector : 'app-server-down',
    templateUrl : './server-down-error.component.html'
})
export  class ServerDownErrorComponent{
    @Input() isHiding: boolean;

    ngOnInit(): void {
    }

    constructor() {
        this.isHiding = false;
    }

}