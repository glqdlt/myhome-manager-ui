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
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule,MatCheckboxModule,MatDatepickerModule,MatInputModule,MatNativeDateModule,MatProgressSpinnerModule,MatRadioModule} from "@angular/material";
import {ReadStatusPipe} from "./ReadStatusPipe";
import {SpinnerService} from "./services/SpinnerService";
import {GlobalSpinnerComponent} from "./common/spinner/global-spinner.component";
import {CrawTableComponent} from "./craw/craw-table/craw-table.component";
import {ErrorPageComponent} from "./common/error-page/error-page.component";
import {UserLoginService} from "./services/UserLoginService";
import {AuthGuardService} from "./services/AuthGuardService";
import {MainHeaderComponent} from "./common/header/main-header.component";
import {TargetAdComponent} from "./common/target-ad/target-ad.component";
import {FooterComponent} from "./common/footer/footer.component";
import {WebsocketService} from "./services/WebsocketService";
import {ChatService} from "./services/ChatService";


// 전개 연산자 사용
export const myComponents = [AppComponent,
    MainHeaderComponent,
    GlobalNavBarComponent,
    LoginComponent,
    WriteBookComponent,
    BookListComponent,
    BookTypePipe,
    ReadStatusPipe,
    BookDetailComponent,
    TargetAdComponent,
    FooterComponent,
    HomeComponentComponent,
    CalendarComponent,
    NotFoundComponent,
    ChartViewComponent,
    BookWrapperComponent,
    NotFoundComponent,
    ErrorPageComponent,
    CrawTableComponent,
    GlobalSpinnerComponent,
    ChatComponent]

@NgModule({
    declarations: [
        ...myComponents
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        NoopAnimationsModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatButtonModule,
        MatRadioModule,
        MatProgressSpinnerModule,
        RouterModule.forRoot(routes)
        // InMemoryWebApiModule.forRoot(InMomeryDatabaseService, {delay: 500, put204:false})
    ],
    providers: [RestApiService, BookWriteDeactivatedService, LoginUserService, SpinnerService,UserLoginService,AuthGuardService,WebsocketService,ChatService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
