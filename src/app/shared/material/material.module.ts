import { NgModule } from '@angular/core';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [],
  imports: [
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    MatBadgeModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule
  ],
  exports:[
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    MatBadgeModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule
  ]
})
export class MaterialModule { }
