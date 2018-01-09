import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {UserLoginService} from "./UserLoginService";

@Injectable()
export class AuthGuardService implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let url : string = state.url;
        return this.isLoggedIn();
    }

    isLoggedIn(): boolean {
        if(localStorage.getItem('my-home-manager-app') === null){
            console.log('is false');
            this.router.navigate(['login']);
            return false;
        }
        let refreshDate : Date = new Date(JSON.parse(localStorage.getItem('my-home-manager-app')).exp);
        if (refreshDate.getTime() < new Date().getTime()) {
            console.log('is refresh time');
            this.router.navigate(['login']);
            return false;
        }
        console.log('is true');
        return true;
    }

    constructor(private router: Router, userLoginService : UserLoginService) {
    }

}
