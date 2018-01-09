import {RouterModule, Routes} from "@angular/router";
import {BookListComponent} from "./book-list/book-list.component";
import {BookWriteComponent} from "./book-write/book-write.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {NgModule} from "@angular/core";


const routes : Routes = [

    {
        path: '',
        component : BookListComponent,
        children : [
            {
                path: 'detail/:id',
                component : BookDetailComponent
            }
        ]
    },
    {
        path : 'new',
        component : BookWriteComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class  BookRoutingModule{

}