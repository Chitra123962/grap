import { Component, OnInit } from '@angular/core';
import { ActionService } from '../action.service';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public a:string;
  public b=[];
  


  constructor(private action:ActionService) { }

  ngOnInit() {
    this.a=this.action.gamesTable();
  this.b=this.action.gamesArray;
  }

}
