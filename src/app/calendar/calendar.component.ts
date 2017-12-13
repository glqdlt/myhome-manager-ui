import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  htmlContent;
  counter : number;
  dateNow : number;
  month :number;
  nextMonth :number;
  prevMonth :number;
  day :number;
  year :number;

  monthNames : string[];
  dayNames : string[];
  dayPerMonth :string[];





  constructor() {

    this.month = new Date().getMonth();

    this.monthNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
    this.dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday", "Saturday"];
  }

  constFebNumberOfDays (){
    if (this.month == 1){
      if ( (this.year%100!=0) && (this.year%4==0) || (this.year%400==0)){
        return 29;
      }else{
        return 28;
      }
    }
  }

  ngOnInit() {
  }

}
