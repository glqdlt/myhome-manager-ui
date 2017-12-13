import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login-component',
  styleUrls: ['./login-component.css'],
  templateUrl : './login-component.html'
})
export class LoginComponent implements OnInit {
  loginTitle: string;

  constructor() {
    console.log('login Component Construct..')
    this.loginTitle = 'Plz, Login,.,,../.......';
  }

  ngOnInit() {
    console.log('login Created');
  }

}
