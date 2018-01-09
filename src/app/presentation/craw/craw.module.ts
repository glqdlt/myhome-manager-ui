import {NgModule} from "@angular/core";
import {CrawRoutingModule} from "./craw-routing.module";
import {CrawTableComponent} from "./craw-table/craw-table.component";


@NgModule({
    imports : [CrawRoutingModule],
    declarations : [CrawTableComponent]
})

export class CrawModule {

}