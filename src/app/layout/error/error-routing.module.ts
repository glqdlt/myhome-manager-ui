import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ErrorWrapperComponent} from "./error-wrapper/error-wrapper.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {OfflineErrorComponent} from "./offline/offline-error.component";

const routes: Routes = [
    {
        path: '',
        component: ErrorWrapperComponent,
        children: [
            {
                path: '404',
                component: NotFoundComponent
            },
            {
                path : 'offline',
                component : OfflineErrorComponent
            }
        ]
    }
]

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)],
    declarations: []

})
export class ErrorRoutingModule {

}