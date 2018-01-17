import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {FormEditorComponent} from "./form-editor.component";


@Injectable()
export class FormEditorDeactivatedService implements CanDeactivate<FormEditorComponent> {

  canDeactivate(component: FormEditorComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return component.userLeave ? true : window.confirm('Do you want leave?');
  }

}
