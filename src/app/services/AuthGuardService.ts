import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {UserLoginService} from "./UserLoginService";

@Injectable()
export class AuthGuardService implements CanActivate {


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.userLoginService.isLogied()) {
            console.log('canActivate true');
            return true;
        }
        this.router.navigate(["/login"],{ queryParams: { returnUrl: state.url }});
        return false;
    }

    constructor(private router: Router, private userLoginService: UserLoginService) {
    }

}
