import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-time-line',
  templateUrl: './test-time-line.component.html',
  styleUrls: ['./test-time-line.component.css']
})
export class TestTimeLineComponent implements OnInit {


    // npm install d3@3.5.36 --save to set the version you need
    //
    // npm install @types/d3@3.5.36 --save or a higher version if you want d3 4+
    //
    // and then in your ts do
    //
    // import * as d3 from 'd3';
    //
    // Should work just fine

  ngOnInit(): void {
  }

  TIMELINE_ROW_GRID = 144;
  timelineRow: Array<string> = new Array();
  timelineCol: Array<string> = new Array();

  constructor() {
    this.timeLineCol();
    this.timeLineRow();
  }

  timeLineCol() {
    for (let i = 0; i < 99; i++) {
      this.timelineCol.push(i + '')
    };
  }

  timeLineRow(){
    for(let i = 0; i < this.TIMELINE_ROW_GRID; i++){
      if(i == 30){
        this.timelineRow.push('x');
      }
      this.timelineRow.push('o');
    }

    console.log(this.testTime());
  }

  isPaint(){
    return false;
  }

  testTime(): Date{
    let time = new Date();
    return time;
  }

}
