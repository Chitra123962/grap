import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mult3',
  templateUrl: './mult3.component.html',
  styleUrls: ['./mult3.component.css']
})
export class Mult3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
multiple(){
  
for (var x = 3; x < 20; x++)
{
    if (x % 3 === 0)
    {
  alert("multiples of 3 is"+x);    
    }
}

}
}
