import { Injectable } from '@angular/core';

@Injectable()
export class LoginUserService {

  constructor() { }

  getUserId(){
    return 'admin';
  }

}
