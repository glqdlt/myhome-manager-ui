import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./not-found/not-found.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
    {
    path: '',
    },
    {
    path: '404',
    component: NotFoundComponent
    }
]

@NgModule({
    exports : [RouterModule],
    imports : [RouterModule.forChild(routes)]
})
export  class  ErrorRoutingModule{

}