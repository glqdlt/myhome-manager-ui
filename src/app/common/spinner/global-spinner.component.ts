import {Component} from "@angular/core";
import {SpinnerService} from "../../services/SpinnerService";

@Component({
    selector : 'global-spinner',
    templateUrl : './global-spinner.component.html',
    styleUrls :['./global-spinner.component.css']
})
export class GlobalSpinnerComponent{
    isLoading: boolean;


    // TODO 모달로 구현을 다시 해야한다, w3-modal 이 적용안되는 것 같음.
    constructor(private spinnerService : SpinnerService) {
        spinnerService.getLoading$().subscribe(l => this.isLoading = l);
    }
}
