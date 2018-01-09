import {HomeComponentComponent} from "./home/home-component";
import {CalendarComponent} from "./calendar/calendar.component";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {LoginUserService} from "./services/GetLoginUserService";
import {BrowserModule} from "@angular/platform-browser";
import {ChatComponent} from "./share/chat/chat.component";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatProgressSpinnerModule} from "@angular/material";
import {SpinnerService} from "./services/SpinnerService";
import {GlobalSpinnerComponent} from "./share/spinner/global-spinner.component";
import {CrawTableComponent} from "./craw/craw-table/craw-table.component";
import {UserLoginService} from "./services/UserLoginService";
import {AuthGuardService} from "./services/AuthGuardService";
import {MainHeaderComponent} from "./share/header/main-header.component";
import {TargetAdComponent} from "./share/target-ad/target-ad.component";
import {FooterComponent} from "./share/footer/footer.component";
import {WebsocketService} from "./services/WebsocketService";
import {ChatService} from "./services/ChatService";
import {NgxPaginationModule} from "ngx-pagination";
import {DefaultComponent} from "./layout/default/default.component";
import {AuthComponent} from "./layout/auth/auth.component";
import {AppRoutingModule} from "./app-routing.module";
import {ShareModule} from "./share/share.module";
import {CommonModule} from "@angular/common";


// 전개 연산자 사용
export const myComponents = [AppComponent,
    MainHeaderComponent,
    DefaultComponent,
    AuthComponent,
    TargetAdComponent,
    FooterComponent,
    HomeComponentComponent,
    CalendarComponent,
    CrawTableComponent,
    GlobalSpinnerComponent,
    ChatComponent]

@NgModule({
    declarations: [
        ...myComponents
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        NgxPaginationModule,
        MatProgressSpinnerModule,
        NoopAnimationsModule,
        ShareModule
        // InMemoryWebApiModule.forRoot(InMomeryDatabaseService, {delay: 500, put204:false})
    ],
    providers: [LoginUserService, SpinnerService,UserLoginService,AuthGuardService,WebsocketService,ChatService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
