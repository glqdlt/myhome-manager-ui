import {NgModule} from "@angular/core";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {BookWriteComponent} from "./book-write/book-write.component";
import {BookRoutingModule} from "./book-routing.module";
import {BookWriteDeactivatedService} from "./book-write/book-write-deactivated.service";
import {BookTypePipe} from "./book-type.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ReadStatusPipe} from "./read-status.pipe";
import {
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatRadioModule
} from "@angular/material";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {RestApiService} from "../../services/RestApiService";
import {SpinnerService} from "../../services/SpinnerService";
import {BookWrapperComponent} from "./book-wrapper/book-wrapper.component";
import {ShareModule} from "../../share/share.module";
import {ErrorModule} from "../../layout/error/error.module";
import {PaginationModule} from "../../share/ng4-pagination/pagination.module";
import {BookListComponent} from "./book-list/book-list.component";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";

@NgModule({
    imports: [BookRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        ShareModule,
        MatInputModule,
        MatDatepickerModule,
        NgxDatatableModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatButtonModule,
        MatRadioModule,
        PaginationModule,
        ErrorModule,
        MatProgressSpinnerModule, HttpClientModule],
    declarations: [BookWrapperComponent, BookListComponent,BookDetailComponent, BookWriteComponent, BookTypePipe, ReadStatusPipe],
    providers: [RestApiService,SpinnerService,BookWriteDeactivatedService]
})
export class BookModule {


}