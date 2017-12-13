import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from "@angular/router";
import {WriteBookComponent} from "./book-write.component";
import {Observable} from "rxjs/Observable";


@Injectable()
export class BookWriteDeactivatedService implements CanDeactivate<WriteBookComponent> {

  canDeactivate(component: WriteBookComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return component.userLeave ? true : window.confirm('Do you want leave?');
  }

}
