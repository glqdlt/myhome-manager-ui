import {RouterModule, Routes} from "@angular/router";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {NgModule} from "@angular/core";
import {BookWrapperComponent} from "./book-wrapper/book-wrapper.component";
import {BookListComponent} from "./book-list/book-list.component";
import {BookNewComponent} from "./book-new/book-new.component";


const routes : Routes = [

    {
        path: '',
        component : BookWrapperComponent,
        children : [
            {
                path: '',
                component: BookListComponent
            },
            {
                path: 'detail/:id',
                component : BookDetailComponent
            }
        ]
    },
    {
        path : 'new',
        component : BookNewComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class  BookRoutingModule{

}