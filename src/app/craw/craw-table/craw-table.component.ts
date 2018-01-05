import {Component, OnDestroy, OnInit} from "@angular/core";
import {Craw} from "../../model/CrawModel";
import {RestApiService} from "../../services/RestApiService";
import {SpinnerService} from "../../services/SpinnerService";


@Component({
    selector: 'app-craw-table',
    templateUrl: './craw-table.component.html',
    styles: ['']
})
export class CrawTableComponent implements OnInit , OnDestroy{

    ngOnDestroy(): void {
        this.spinnerService.stop();
    }

    crawData: Craw[];
    private totalPage: any;
    private modalBoolean: boolean;
    private nowPage: number;

    constructor(private restApiService: RestApiService, private spinnerService: SpinnerService) {

        this.nowPage = 0;
    }

    ngOnInit() {
        this.onLoad(this.nowPage);
    }


    onLoad(nowPage: number) {

        this.restApiService.getCrawPage(nowPage)
            .do(
                (this.spinnerService.start())
            )
            .subscribe(
                result => (
                    this.spinnerService.stop(),
                        this.crawData = result['data'],
                        this.totalPage = result['totalPage'],
                        this.modalBoolean = false
                ),
                error => (console.error(`May be Server is Die.`), this.modalBoolean = true)
            );
    }
}
