import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserLoginService} from "../../services/UserLoginService";
import {LoginUser} from "../../model/LoginUserModel";
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginToken} from "../../model/LoginTokenModel";

@Component({
    selector: 'app-login-component',
    styleUrls: ['./login-component.css'],
    templateUrl: './login-component.html'
})
export class LoginComponent implements OnInit {
    loginTitle: string;
    private returnUrl: string;
    private loginToken;

    constructor(private userLoginService: UserLoginService, private route: ActivatedRoute, private router: Router) {
        this.loginTitle = 'Plz, Login,.,,../.......';
    }


    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        console.log(`returnUrl : ${this.returnUrl}`);
    }

    loginAction(form: NgForm) {
        let user = new LoginUser();
        user.userId = form.value.user_id;
        user.userPassword = form.value.user_pw;
        this.userLoginService.callServerAuth(user).subscribe(
            res => (this.loginToken = res, console.log(`loginToken : ${this.loginToken}`), this.userLoginService.setLoginToken(this.loginToken)),
            err => (console.log(err))
        );

        this.router.navigate([this.returnUrl]);

    }

    checkAction() {

        // this.userLoginService.isRefreshTime();

    }
}
