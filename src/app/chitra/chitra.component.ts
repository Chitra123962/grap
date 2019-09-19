import { Component } from '@angular/core';

@Component({
  selector: 'app-chitra',
  templateUrl: './chitra.component.html',
  styleUrls: ['./chitra.component.css']
})
export class ChitraComponent {
  title = 'Angular 4 Project!';
  //array of months.
  months = ["January", "Feburary", "March", "April",
           "May", "June", "July", "August", "September",
           "October", "November", "December"];
  isavailable = true;
  myClickFunction(event) { 
     //just added console.log which will display the event details in browser on click of the button.
     alert("Button is clicked");
     console.log(event);
  }
}

// implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }


// }