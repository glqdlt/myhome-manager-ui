import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('AuthGuard Work!');
    // this.router.navigate(["/login"]);
    console.log('route changing, this is RX');
    return false;
  }

  constructor(private router : Router) { }

}
