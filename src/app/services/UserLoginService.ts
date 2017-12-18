import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LoginUser} from "../model/LoginUserModel";
import {LoginToken} from "../model/LoginTokenModel";


export const dummyToken: LoginToken = {
    token: 'aaaa',
    exp: new Date(),
    refresh_token: 'hhh'
}


@Injectable()
export class UserLoginService {
    localStorage: WindowLocalStorage;

    constructor(private httpClient: HttpClient) {
    }

    userLogin(user: LoginUser) {
        // TODO api server 만들어야하고, subscribe 에 성공 시 this.loginToken 에 값을 넣고, setLoginToken으로 넘겨줘야함.
        this.callServerAuth(user);
        this.setLoginToken(dummyToken);
        console.log('set token');
    }

    private callServerAuth(user: LoginUser) {
        // this.httpClient.post('http://127.0.0.1:38080/auth/login', user).subscribe(x => (loginToken = x),err => (console.log(err)));
    }
    private getLoginToken() {
        console.log(localStorage.getItem('myHomeToken'));
        return localStorage.getItem('myHomeToken');
    }

    isLogied(): boolean {
        let refreshDate = JSON.parse(this.getLoginToken()).exp;
        console.log(`refreshDate : ${refreshDate} , this time : ${new Date()}`);
        if (refreshDate < new Date()) {
            console.log('is refresh time');
            return false;
        }
        return true;
    }

    setLoginToken(token: LoginToken) {
        localStorage.setItem('myHomeToken', JSON.stringify(token));
    }
}