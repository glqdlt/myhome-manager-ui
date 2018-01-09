import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LoginUser} from "../model/LoginUserModel";
import {LoginToken} from "../model/LoginTokenModel";

@Injectable()
export class UserLoginService {

    isLoggedIn : boolean;
    constructor(private httpClient: HttpClient) {
        this.isLoggedIn = false;
    }


    authToServer(user: LoginUser) {
        return this.httpClient.post('http://127.0.0.1:28080/auth/isLogin', user);
    }

    checkRespone(response){
        this.setLoginToken(response);
    }

    setLoginToken(token: LoginToken) {
        localStorage.setItem('my-home-manager-app', JSON.stringify(token));
    }


}