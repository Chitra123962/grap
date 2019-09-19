import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { ChitraComponent } from './chitra/chitra.component';
import {SamComponent } from './sam/sam.component';
import {LogComponent } from './log/log.component';
import { FcalComponent } from './fcal/fcal.component';
import { CalsComponent } from './cals/cals.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {path:'nav', component:NavComponent },
  {path: 'login',component:LogComponent },
  {path:'', component:FcalComponent },
  {path:'cals', component:CalsComponent },
  {path:'sampl', component:SampleComponent },
  {path: 'chitra', component:ChitraComponent},
  {path: 'sam',component:SamComponent },
  {path: 'sample',component:SampleComponent }
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
