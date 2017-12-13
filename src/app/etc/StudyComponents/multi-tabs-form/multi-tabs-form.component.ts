import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-multi-tabs-form',
  templateUrl: './multi-tabs-form.component.html',
  styleUrls: ['./multi-tabs-form.component.css']
})
export class MultiTabsFormComponent implements OnInit {

  cities;
  detailCity = '';

  constructor() {
    this.cities = [{name: 'london', main: 'paris', msg: 'London is the capital city of England.'}, {
      name: 'korea',
      main: 'seoul',
      msg: 'Seoul is the capital city of England.'
    }]
  }

  ngOnInit() {
  }

  cityChange(name: string) {
    this.detailCity = name;
  }
}
