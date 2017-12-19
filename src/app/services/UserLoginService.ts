import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LoginUser} from "../model/LoginUserModel";
import {LoginToken} from "../model/LoginTokenModel";


// export const dummyToken: LoginToken = {
//     token: 'aaaa',
//     exp: new Date(),
//     refresh_token: 'hhh'
// }


@Injectable()
export class UserLoginService {
    localStorage: WindowLocalStorage;
    loginToken;

    constructor(private httpClient: HttpClient) {
    }


    callServerAuth(user: LoginUser) {
        return this.httpClient.post('http://127.0.0.1:28080/auth/isLogin', user);
    }
    private getLoginToken() {
        console.log(localStorage.getItem('myHomeToken'));
        return localStorage.getItem('myHomeToken');
    }

    isLogined(): boolean {
        let refreshDate : Date = new Date(JSON.parse(this.getLoginToken()).exp);
        console.log(`refreshDate : ${refreshDate} , this time : ${new Date()}`);
        if (refreshDate.getTime() < new Date().getTime()) {
            console.log('is refresh time');
            return false;
        }
        return true;
    }

    setLoginToken(token: LoginToken) {
        localStorage.setItem('myHomeToken', JSON.stringify(token));
    }
}