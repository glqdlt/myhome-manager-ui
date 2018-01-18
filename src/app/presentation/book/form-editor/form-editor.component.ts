import * as moment from 'moment';
import {Observable} from "rxjs/Rx";
import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {RestApiService} from "../../../services/RestApiService";
import {LoginUserService} from "../../../services/storageCurrentUserService";
import {FormModel} from "./FormModel";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-form-editor',
    templateUrl: './form-editor.component.html',
    styleUrls: ['./form-editor.component.css']
})
export class FormEditorComponent implements OnInit, OnDestroy, OnChanges {
    ngOnChanges(changes: SimpleChanges): void {
    }


    @Input() editMode: FormModel = {isEdit: false, data: undefined};
    myForm: FormGroup;
    submitted: boolean;

    _subject: string = '';


    ngOnDestroy(): void {

    }

    set userLeave(bool: boolean) {
        this._userLeave = bool;
    }

    get userLeave(): boolean {
        return this._userLeave;
    }

    private _userLeave: boolean;
    read_status: boolean;

    constructor(private restApiService: RestApiService, private router: Router, private _location: Location, private userLogin: LoginUserService) {
        this._userLeave = false;
    }

    clickBack() {
        this._userLeave = true;
        console.log(this._location);
        // this._location.back();
    }


    createBuilder() {
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
            subject = new FormControl(this.editMode.data.subject, Validators.required);
            author = new FormControl(this.editMode.data.author, Validators.required);
            note = new FormControl(this.editMode.data.note);
            book_type = new FormControl(this.editMode.data.book_type.toString(), Validators.required);
            server_name = new FormControl(this.editMode.data.server_name, Validators.required);
            review_url = new FormControl(this.editMode.data.review_url);
            future_date = new FormControl(this.dateToString(this.editMode.data.future_date));
            // subject = new FormControl('', Validators.required);
            // author = new FormControl('', Validators.required);
            // note = new FormControl('');
            // book_type = new FormControl('', Validators.required);
            // server_name = new FormControl('', Validators.required);
            // review_url = new FormControl('');
            // future_date = new FormControl('');
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

    ngOnInit() {
        console.log('OnInit');
        this.createBuilder();
    }

    onSubmit() {
        if (!this.myForm.valid) {
            alert('입력 값 확인');
        }

        this.submitted = true;
        if (!this.editMode.isEdit) {
            this.restApiService.putBook(this.myForm.value).subscribe(
                res =>
                    (Observable.timer(2000).subscribe(next => this.goList())),
                err => console.error(err),
            );
        } else if (this.editMode.isEdit) {
            this.restApiService.updateBook(this.editMode.data.no, this.myForm.value).subscribe(
                res =>
                    (Observable.timer(2000).subscribe(next => this.goList())),
                err => console.error(err),
            )
        }
    }


    goList() {
        this.router.navigateByUrl('/book')
    }


    dateToString(date: Date) {
        console.log(`date : ${date}`);
        let formattedDate = moment(date).format('YYYY-MM-DD');
        console.log(formattedDate);
        return formattedDate;
    }
}
