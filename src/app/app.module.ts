import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {DeveloperModule} from "./featureModules/developer/developer.module";
import {AuthModule} from "./featureModules/auth/auth.module";
import {ManagerModule} from "./featureModules/manager/manager.module";
import {AdminModule} from "./featureModules/admin/admin.module";



const mat = [
  MatSidenavModule
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    DeveloperModule,
    ManagerModule,
    AdminModule,
    mat
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
