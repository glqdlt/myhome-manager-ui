import {RouterModule} from "@angular/router";
import {HomeComponentComponent} from "./home/home-component";
import {BookWrapperComponent} from "./book/book-wrapper/book-wrapper.component";
import {BookListComponent} from "./book/book-list/book-list.component";
import {BookWriteDeactivatedService} from "./book/book-write/book-write-deactivated.service";
import {CalendarComponent} from "./calendar/calendar.component";
import {LoginComponent} from "./common/login-component/login-component";
import {NotFoundComponent} from "./common/not-found/not-found.component";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {GlobalNavBarComponent, routes} from "./common/global-nav-bar/global-nav-bar.component";
import {WriteBookComponent} from "./book/book-write/book-write.component";
import {BookTypePipe} from "./BookTypePipe";
import {BookDetailComponent} from "./book/book-detail/book-detail.component";
import {HttpClientModule} from "@angular/common/http";
import {RestApiService} from "./services/RestApiService";
import {LoginUserService} from "./services/GetLoginUserService";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {ChartViewComponent} from "./test-view/chart-view.component";
import {ChatComponent} from "./common/chat/chat.component";

// 라우트에 딱히 문제가 없는데 자꾸 에러가났다.
//core.es5.js:1020 ERROR Error: Uncaught (in promise): EmptyError: no elements in sequence EmptyError: no elements in sequence
// 알고봤더니 오픈소스 에러였음.
// https://stackoverflow.com/questions/41131476/emptyerror-no-elements-in-sequence

@NgModule({
  declarations: [
    AppComponent,
    GlobalNavBarComponent,
    LoginComponent,
    WriteBookComponent,
    BookListComponent,
    BookTypePipe,
    BookDetailComponent,
    HomeComponentComponent,
    CalendarComponent,
    NotFoundComponent,
    ChartViewComponent,
    BookWrapperComponent,
      ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    // InMemoryWebApiModule.forRoot(InMomeryDatabaseService, {delay: 500, put204:false})
  ],
  providers: [RestApiService, BookWriteDeactivatedService, LoginUserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
