import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvenService {

  constructor() { }
  showTodayDate(){
    let ndate=new Date();
    return ndate; 
  }
}
