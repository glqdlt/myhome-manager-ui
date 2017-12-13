import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lock-page-comp',
  templateUrl: './lock-page-comp.component.html',
  styleUrls: ['./lock-page-comp.component.css']
})
export class LockPageCompComponent implements OnInit {
  lockTitle: string;

  constructor() {
    this.lockTitle = 'i am lock!';

  }

  ngOnInit() {
    console.log('this page render?');
  }

}
