import { Component, OnInit } from '@angular/core';
import { EvenService } from '../even.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
todaydate;
work="entered in new component created"
  constructor(private even:EvenService) { }

  ngOnInit() {
    this.todaydate=this.even.showTodayDate();
  }

}
