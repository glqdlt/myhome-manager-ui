import {NgModule} from "@angular/core";
import {ChartModule} from "primeng/primeng";
import {PieChartComponent} from "./pie-chart/pie-chart.component";
import {ServerRoutingModule} from "./server-routing.module";
import {ServerWrapperComponent} from "./server-wrapper/server-wrapper.component";
import {ServerDetailComponent} from "./server-wrapper/detail/server-detail.component";
import {ServerDashboardComponent} from "./server-wrapper/dashboard/server-dashboard.component";
import {ShareModule} from "../../share/share.module";

@NgModule({
    imports : [ChartModule,ServerRoutingModule,ShareModule],
    declarations : [PieChartComponent, ServerWrapperComponent, ServerDetailComponent,ServerDashboardComponent],
    exports : []
})
export class ServerModule{

}