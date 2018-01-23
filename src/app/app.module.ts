import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {LoginUserService} from "./services/storageCurrentUserService";
import {BrowserModule} from "@angular/platform-browser";
import {ChatComponent} from "./layout/default/chat/chat.component";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatMenuModule, MatProgressSpinnerModule} from "@angular/material";
import {SpinnerService} from "./services/SpinnerService";
import {GlobalSpinnerComponent} from "./share/spinner/global-spinner.component";
import {UserLoginService} from "./services/UserLoginService";
import {AuthGuardService} from "./services/AuthGuardService";
import {MainHeaderComponent} from "./layout/default/header/main-header.component";
import {TargetAdComponent} from "./layout/default/target-ad/target-ad.component";
import {FooterComponent} from "./layout/default/footer/footer.component";
import {WebsocketService} from "./services/WebsocketService";
import {NgxPaginationModule} from "ngx-pagination";
import {DefaultComponent} from "./layout/default/default.component";
import {AuthComponent} from "./layout/auth/auth.component";
import {AppRoutingModule} from "./app-routing.module";
import {ShareModule} from "./share/share.module";
import {CommonModule} from "@angular/common";
import {HomeComponentComponent} from "./presentation/home/home-component";
import {HttpClientModule} from "@angular/common/http";
import {ProgressBarComponent} from "./layout/default/progress/progress-bar.component";
import {NgProgressModule} from "@ngx-progressbar/core";
import {ServerDownErrorComponent} from "./layout/error/server-down/server-down-error.component";
import {PaginationModule} from "./share/ng4-pagination/pagination.module";
import {TreeModule} from "angular-tree-component";
import {MenubarModule, MenuModule} from "primeng/primeng";
import {RightAreaService} from "./layout/default/RightAreaService";


// 전개 연산자 사용
export const myComponents = [AppComponent,
    MainHeaderComponent,
    DefaultComponent,
    AuthComponent,
    TargetAdComponent,
    FooterComponent,
    HomeComponentComponent,
    GlobalSpinnerComponent,
    ProgressBarComponent,
    ChatComponent]

@NgModule({
    declarations: [
        ...myComponents
    ],
    imports: [
        BrowserModule,
        TreeModule,
        CommonModule,
        PaginationModule,
        AppRoutingModule,
        MatMenuModule,
        NgxPaginationModule,
        MenubarModule,
        MatProgressSpinnerModule,
        NoopAnimationsModule,
        HttpClientModule,
        ShareModule,
        NgProgressModule.forRoot()
        // InMemoryWebApiModule.forRoot(InMomeryDatabaseService, {delay: 500, put204:false})
    ],
    providers: [LoginUserService, SpinnerService,UserLoginService,AuthGuardService,WebsocketService,RightAreaService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
