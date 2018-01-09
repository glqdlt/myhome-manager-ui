import {Component} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {UserLoginService} from "../../services/UserLoginService";
import {LoginUser} from "../../model/LoginUserModel";
import {Router} from "@angular/router";


@Component({

    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent {
    constructor(private title: Title, private userLoginService: UserLoginService,private router: Router) {
        this.title.setTitle("Login");
    }


    loginAction(username, password) {
        let userLogin: LoginUser = {userId: username, userPassword: password};
        this.userLoginService.authToServer(userLogin).subscribe(res => (this.userLoginService.checkRespone(res),console.log(res)), err => console.error(err), () => this.router.navigate(['']));
    }


}