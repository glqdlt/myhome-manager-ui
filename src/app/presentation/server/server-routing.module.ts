import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {BookListComponent} from "../book/book-list/book-list.component";
import {BookWrapperComponent} from "../book/book-wrapper/book-wrapper.component";
import {BookDetailComponent} from "../book/book-detail/book-detail.component";
import {ServerWrapperComponent} from "./server-wrapper/server-wrapper.component";
import {ServerDashboardComponent} from "./server-wrapper/dashboard/server-dashboard.component";
import {ServerDetailComponent} from "./server-wrapper/detail/server-detail.component";


const routes : Routes = [

    {
        path: '',
        component : ServerWrapperComponent,
        children : [
            {
                path: '',
                component: ServerDashboardComponent
            },
            {
                path: 'detail/:id',
                component : ServerDetailComponent
            }
        ]
    },
]

@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports : [RouterModule]

})
export class ServerRoutingModule {

}