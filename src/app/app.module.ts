import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EvenService} from './even.service';
import { ActionService} from './action.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { ChitraComponent } from './chitra/chitra.component';
import { SamComponent } from './sam/sam.component';
import { WorkComponent } from './work/work.component';
import { GameComponent } from './game/game.component';
import { LogComponent } from './log/log.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CalsComponent } from './cals/cals.component';
import { FcalComponent } from './fcal/fcal.component';
import { NavComponent } from './nav/nav.component';
import { ImgComponent } from './img/img.component';
import { Mult3Component } from './mult3/mult3.component';
@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    ChitraComponent,
    SamComponent,
    WorkComponent,
    GameComponent,
    LogComponent,
    CalsComponent,
    FcalComponent,
    NavComponent,
    ImgComponent,
    Mult3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // providers: [EvenService],
  providers: [
   ActionService
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
