import {NgModule} from "@angular/core";
import {CardComponent} from "./card/card.component";
import {BreadCrumb} from "./bread-crumb/bread-crumb";
import {CommonModule} from "@angular/common";

@NgModule({

    imports :[CommonModule],
    exports : [CardComponent,BreadCrumb],
    declarations : [CardComponent, BreadCrumb]

})
export class ShareModule{

}