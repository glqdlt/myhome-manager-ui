import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector : 'ng2-pagination',
    templateUrl : './pagination.component.html',
    styleUrls : ['./pagination.component.css']
})
export class PaginationComponent{

    @Input() pageTotal : number = 40;
    currentPage : number = 1;
    @Output('listenClickEvent') eventCurrent : EventEmitter<number> = new EventEmitter();
    @Input() pageMaxSize : number = 4;

    private pageRange : any[];


    constructor() {
        this.pagingBuilder();
    }


    onClickPaging(numb: number) {
        this.currentPage = numb;
        this.eventCurrent.emit(this.currentPage);
        this.pagingBuilder();
    }



    pagingBuilder() {
        if (this.pageTotal === 0) {
            return;
        }
        const range = Array();
        if (this.pageTotal !== 1) {
            range.push(1);
        }
        let centerNumb = Math.floor(this.pageMaxSize / 2);
        let left = this.currentPage - centerNumb;
        let right = this.currentPage + centerNumb;


        if (left <= 0) {
            right = right - left;
            right++;
        }
        if (right > this.pageTotal) {
            left = left + (this.pageTotal - right);
            left--;
        } else if (right == this.pageTotal) {
            left = left - 1;
        }

        for (let i = left; i < right; i++) {
            if (i <= 0) {

            } else if (i >= this.pageTotal - 1) {

            } else {
                range.push(i+1);
            }

        }
        range.push(this.pageTotal);
        this.pageRange = range;
    }

    prevItem() {
        if((this.currentPage) <= 1) {
            return;
        }
        this.currentPage--;
        this.pagingBuilder();
    }

    nextItem() {
        if (this.currentPage >= (this.pageTotal)) {
            return;
        }
        this.currentPage++;
        this.pagingBuilder();
    }
    
}