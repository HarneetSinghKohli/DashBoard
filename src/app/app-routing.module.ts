import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnvPf2DetailComponent } from './environment/cbs-3.x/env-pf2-detail/env-pf2-detail.component';

import {DashboardComponent} from './dashboard/dashboard.component'



const routes: Routes = [

  { path:'',component:DashboardComponent},
  { path:'pf2details',component:EnvPf2DetailComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
