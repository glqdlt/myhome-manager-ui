import {Component, OnInit} from '@angular/core';
import {Routes} from "@angular/router";
import {BookWrapperComponent} from "../../book/book-wrapper/book-wrapper.component";
import {LoginComponent} from "../login-component/login-component";
import {CalendarComponent} from "../../calendar/calendar.component";
import {ChartViewComponent} from "../../test-view/chart-view.component";
import {BookDetailComponent} from "../../book/book-detail/book-detail.component";
import {HomeComponentComponent} from "../../home/home-component";
import {WriteBookComponent} from "../../book/book-write/book-write.component";
import {BookWriteDeactivatedService} from "../../book/book-write/book-write-deactivated.service";
import {NotFoundComponent} from "../not-found/not-found.component";
import {BookListComponent} from "../../book/book-list/book-list.component";
import {CrawTableComponent} from "../../craw/craw-table/craw-table.component";
import {AuthGuardService} from "../../services/AuthGuardService";

export const routes: Routes = [
    {path: '', component: HomeComponentComponent, pathMatch: 'full'},
    {
        path: 'book', component: BookWrapperComponent, canActivate: [AuthGuardService],
        children: [
            {path: '', component: BookListComponent},
            {path: 'detail/:id', component: BookDetailComponent},
            {
                path: 'write',
                component: WriteBookComponent,
                canDeactivate: [BookWriteDeactivatedService],
                pathMatch: 'full'
            },
        ]
    },
    {path: 'craw', component: CrawTableComponent},
    {path: 'charts', component: ChartViewComponent},
    {path: 'cal', component: CalendarComponent},
    {path: "login", component: LoginComponent},
    {path: "**", component: NotFoundComponent}];

@Component({
    selector: 'app-global-nav-bar',
    templateUrl: './global-nav-bar.component.html',
    styleUrls: ['./global-nav-bar.component.css']
})
export class GlobalNavBarComponent implements OnInit {


    homeMenu: object =
        {label: 'HOME', url: '', child: [{label: 'Home', url: ''}]};
    bookMenu: object =
        {label: 'Book Manager', url : 'book', child: [{label: 'List', url: 'book'}, {label: 'New', url: 'book/write'}]};
    serverManagerMenu: object =
        {label: 'Server Manager', url : 'server', child: [{label: 'Management', url: 'server'}, {label: 'Add Server', url: 'server/add'}]};
    crawManagerMenu: object =
        {label: 'Craw Manager', url: 'craw', child: [{label: 'Dashboard', url: 'craw'},{label: 'Monitoring', url: 'craw/monitoring'},{label: 'Settings', url: 'craw/settings'}]};

    menuEntries: object[] = [this.homeMenu,this.bookMenu,this.serverManagerMenu,this.crawManagerMenu];

    constructor() {

    }

    ngOnInit() {
    }

}
