import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DefaultComponent} from "./layout/default/default.component";
import {AuthComponent} from "./layout/auth/auth.component";
import {HomeComponentComponent} from "./home/home-component";

// export const routes: Routes = [
//     {path: '', component: HomeComponentComponent, pathMatch: 'full'},
//     {
//         path: 'book', component: BookWrapperComponent, canActivate: [AuthGuardService],
//         children: [
//             {path: '', component: BookListComponent},
//             {path: 'detail/:id', component: BookDetailComponent},
//             {
//                 path: 'write',
//                 component: BookWriteComponent,
//                 canDeactivate: [BookWriteDeactivatedService],
//                 pathMatch: 'full'
//             },
//         ]
//     },
//     {path: 'craw', component: CrawTableComponent},
//     {path: 'charts', component: ChartViewComponent},
//     {path: 'cal', component: CalendarComponent},
//     {path: "login", component: LoginComponent},
//     {path: "**", component: NotFoundComponent}];

const routes: Routes =
    [
        {
            path: '',
            component: DefaultComponent,
            children: [
                {
                    path: '',
                    component : HomeComponentComponent
                },
                {
                    path : 'book',
                    loadChildren : './book/book.module#BookModule'
                }
            ]
        },
        {
            path: 'login',
            component: AuthComponent,
            children: []
        },
        {
            path: 'error',
            loadChildren : './layout/error/error.module#ErrorModule'

        }
    ]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule {


}
