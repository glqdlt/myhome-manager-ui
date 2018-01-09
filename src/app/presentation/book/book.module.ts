import {NgModule} from "@angular/core";
import {BookListComponent} from "./book-list/book-list.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {BookWriteComponent} from "./book-write/book-write.component";
import {BookRoutingModule} from "./book-routing.module";
import {BookWriteDeactivatedService} from "./book-write/book-write-deactivated.service";
import {BookTypePipe} from "./book-type.pipe";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {ReadStatusPipe} from "./read-status.pipe";
import {
    MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatInputModule, MatNativeDateModule,
    MatProgressSpinnerModule, MatRadioModule
} from "@angular/material";
import {NgxPaginationModule} from "ngx-pagination";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {RestApiService} from "../../services/RestApiService";
import {SpinnerService} from "../../services/SpinnerService";

@NgModule({
    imports: [BookRoutingModule,
        FormsModule,
        CommonModule,
        NgxPaginationModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatButtonModule,
        MatRadioModule,
        MatProgressSpinnerModule, HttpClientModule,NgxPaginationModule],
    declarations: [BookListComponent, BookDetailComponent, BookWriteComponent, BookTypePipe, ReadStatusPipe],
    providers: [RestApiService,SpinnerService,BookWriteDeactivatedService]
})
export class BookModule {


}