import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Env3xComponent} from './environment/cbs-3.x/3x.component';
import {Env3xComponent1} from './environment/cbs-3.x/env-pf2/3x1.component';
import {Env3xComponent2} from './environment/cbs-3.x/env-tf2/3x2.component';
import {HttpClientModule} from '@angular/common/http';
import {CommunicationService} from './environment/cbs-3.x/3x.service';

import { Cbs4oneComponent } from './environment/cbs-4.x/cbs4one/cbs4one.component';
import { Cbs4twoComponent } from './environment/cbs-4.x/cbs4two/cbs4two.component';
import { Cbs4threeComponent } from './environment/cbs-4.x/cbs4three/cbs4three.component';
import { EnvIafComponent } from './environment/cbs-4.x/cbs4one/env-iaf/env-iaf.component';
import { EnvPafComponent } from './environment/cbs-4.x/cbs4one/env-paf/env-paf.component';
import { EnvTafComponent } from './environment/cbs-4.x/cbs4one/env-taf/env-taf.component';
import {EnvIdbComponent} from './environment/cbs-4.x/cbs4two/env-idb/env-idb.component';
import {EnvPdbComponent} from './environment/cbs-4.x/cbs4two/env-pdb/env-pdb.component';
import {EnvTdbComponent} from './environment/cbs-4.x/cbs4two/env-tdb/env-tdb.component';
import {EnvIm3Component} from './environment/cbs-4.x/cbs4three/env-im3/env-im3.component';
import {EnvPm3Component} from './environment/cbs-4.x/cbs4three/env-pm3/env-pm3.component';
import {EnvTm3Component} from './environment/cbs-4.x/cbs4three/env-tm3/env-tm3.component';
import { EnvPf2DetailComponent } from './environment/cbs-3.x/env-pf2-detail/env-pf2-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    Env3xComponent,
    Env3xComponent1,
    Env3xComponent2,
   Cbs4oneComponent,
   Cbs4twoComponent,
   Cbs4threeComponent,
   EnvIafComponent,
   EnvPafComponent,
   EnvTafComponent,
   EnvIdbComponent,
   EnvPdbComponent,
   EnvTdbComponent,
   EnvIm3Component,
   EnvPm3Component,
   EnvTm3Component,
   EnvPf2DetailComponent,
   DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
