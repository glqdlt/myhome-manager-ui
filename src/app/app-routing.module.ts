import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DefaultComponent} from "./layout/default/default.component";
import {AuthComponent} from "./layout/auth/auth.component";
import {HomeComponentComponent} from "./presentation/home/home-component";
import {AuthGuardService} from "./services/AuthGuardService";

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
            canActivate: [AuthGuardService],
            component: DefaultComponent,
            children: [
                {
                    path: '',
                    component: HomeComponentComponent
                },
                {
                    path: 'book',
                    loadChildren: './presentation/book/book.module#BookModule'
                },
                {
                    path: 'craw',
                    loadChildren: './presentation/craw/craw.module#CrawModule'
                },
                {
                    path: 'server',
                    loadChildren : './presentation/server/server.module#ServerModule'
                }
            ]
        },
        {
            path: 'login',
            component: AuthComponent
        },
        {
            path: 'error',
            loadChildren: './layout/error/error.module#ErrorModule'

        }
    ]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule {


}
