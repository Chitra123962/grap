import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fcal',
  
  templateUrl: './fcal.component.html',
  styleUrls: ['./fcal.component.css']
})
export class FcalComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
fun(){
  alert("Welcome");
  this.router.navigateByUrl('cals');
}
}
