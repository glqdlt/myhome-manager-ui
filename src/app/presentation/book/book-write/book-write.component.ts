import * as moment from 'moment';
import {Observable} from "rxjs/Rx";
import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {RestApiService} from "../../../services/RestApiService";
import {LoginUserService} from "../../../services/storageCurrentUserService";
import {SpinnerService} from "../../../services/SpinnerService";
import {FormMode} from "./formMode";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-book-write',
    templateUrl: './book-write.component.html',
    styleUrls: ['./book-write.component.css']
})
export class BookWriteComponent implements OnInit, OnDestroy {

    @Input() editMode: FormMode = {isEdit: false, data : undefined};
    myForm: FormGroup;
    submitted: boolean;

    ngOnDestroy(): void {

    }

    set userLeave(bool: boolean) {
        this._userLeave = bool;
    }

    get userLeave(): boolean {
        return this._userLeave;
    }

    private _userLeave: boolean;
    read_status : boolean;

    constructor(private restApiService: RestApiService, private router: Router, private _location: Location, private userLogin: LoginUserService, private spinnerService : SpinnerService) {
        this._userLeave = false;
    }

    clickBack() {
        this._userLeave = true;
        this._location.back();
    }


    ngOnInit() {
        let subject;
        let author;
        let note
        let book_type;
        let reg_date;
        let server_name;
        let review_url;
        let future_date;
        if (!this.editMode.isEdit) {
            subject = new FormControl('', Validators.required);
            author = new FormControl('', Validators.required);
            note = new FormControl('');
            book_type = new FormControl('1', [Validators.required]);
            reg_date = new FormControl(this.dateToString(new Date()), [Validators.required]);
            server_name = new FormControl('', Validators.required);
            review_url = new FormControl('');
            future_date = new FormControl('');
            this.myForm = new FormGroup({
                subject: subject,
                author: author,
                note: note,
                book_type: book_type,
                reg_date: reg_date,
                future_date: future_date,
                server_name: server_name,
                review_url: review_url
            });
        } else if (this.editMode.isEdit) {
            console.log(this.editMode.data);
            subject = new FormControl(this.editMode.data.subject, Validators.required);
            author = new FormControl(this.editMode.data.author, Validators.required);
            note = new FormControl(this.editMode.data.note);
            book_type = new FormControl(this.editMode.data.book_type.toString(), Validators.required);
            server_name = new FormControl(this.editMode.data.server_name, Validators.required);
            review_url = new FormControl(this.editMode.data.review_url);
            future_date = new FormControl(this.dateToString(this.editMode.data.future_date));
            this.myForm = new FormGroup({
                subject: subject,
                author: author,
                note: note,
                book_type: book_type,
                future_date: future_date,
                server_name: server_name,
                review_url: review_url
            });
        }
    }

    onSubmit() {
        if (!this.myForm.valid) {
            alert('입력 값 확인');
        }

        this.submitted = true;
        if(!this.editMode.isEdit) {
            this.restApiService.putBook(this.myForm.value).subscribe(
                res =>
                    (Observable.timer(2000).subscribe(next => this.goList())),
                err => console.error(err),
            );
        }else if(this.editMode.isEdit){
            console.log('edit mode');
            console.log(this.myForm);
            this.restApiService.updateBook(this.editMode.data.no,this.myForm.value).subscribe(
                res =>
                    ( Observable.timer(2000).subscribe(next => this.goList()) ),
                err => console.error(err),
            )
        }
    }


    goList() {
        this.router.navigateByUrl('/book')
    }


    dateToString(date : Date) {
        console.log(`date : ${date}`);
        let formattedDate = moment(date).format('YYYY-MM-DD');
        console.log(formattedDate);
        return formattedDate;
    }
}
