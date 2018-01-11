import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ErrorRoutingModule} from "./error-routing.module";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ErrorWrapperComponent} from "./error-wrapper/error-wrapper.component";
import {OfflineErrorComponent} from "./offline/offline-error.component";
import {ServerDownErrorComponent} from "./server-down/server-down-error.component";

@NgModule({
    imports : [CommonModule,ErrorRoutingModule],
    declarations :[NotFoundComponent,ErrorWrapperComponent, OfflineErrorComponent,ServerDownErrorComponent],
    exports :[ServerDownErrorComponent]

})
export  class  ErrorModule{
    constructor() {

    }
}