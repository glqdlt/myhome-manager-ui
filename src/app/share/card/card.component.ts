import {Component, Input} from "@angular/core";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {

    @Input() title: string = 'Sample Title';
    @Input() decryption: string = '';

    constructor() {

    }
}