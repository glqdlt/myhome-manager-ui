import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ErrorRoutingModule} from "./error-routing.module";
import {NotFoundComponent} from "./not-found/not-found.component";

@NgModule({
    imports : [CommonModule,ErrorRoutingModule],
    declarations :[NotFoundComponent]
})
export  class  ErrorModule{
    constructor() {

    }
}