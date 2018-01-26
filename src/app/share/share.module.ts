import {NgModule} from "@angular/core";
import {CardComponent} from "./card/card.component";
import {CommonModule} from "@angular/common";

@NgModule({

    imports :[CommonModule],
    exports : [CardComponent],
    declarations : [CardComponent]

})
export class ShareModule{

}