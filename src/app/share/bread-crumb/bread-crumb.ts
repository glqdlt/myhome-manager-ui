import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector : 'app-bread-crumb',
    templateUrl : './bread-crumb.html',
    styleUrls : ['./bread-crumb.css']

})
export class BreadCrumb implements OnInit{

    @Input() title: string = 'Sample Title';
    @Input() decryption: string = '';
    breadEntries: [] =[];


    constructor() {
        this.breadEntries = [
            {
                label : 'Home',
                state : '/',
                child : [
                    {
                        label : 'Book Manager',
                        state : 'book',
                        child : [
                            {
                                label : 'Book list',
                                state : 'list'
                            }
                        ]
                    }
                ]
            }
        ]
    }

    ngOnInit(): void {
    }

}