import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms'
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
loginForm:FormGroup
  constructor() { 
    this.loginForm=new FormGroup({
      t1:new FormControl(''),
      t2:new FormControl('')
    })
  }

  ngOnInit() {
  }
  log(data){
    let obj={
      email:data.value.t1,
      password:data.value.t2
    }
    localStorage.setItem("personDetails",JSON.stringify(obj));
  }
//login(data){
  //console.log(data.value);
}

