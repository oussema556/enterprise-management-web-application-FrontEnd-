import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { EditAccountComponent } from './components/edit-account/edit-account.component';
import { CreateReqFormComponent } from './components/create-req-form/create-req-form.component';
import { CreateDocFormComponent } from './components/create-doc-form/create-doc-form.component';
import { DocumentSpaceComponent } from './components/document-space/document-space.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import {RouterModule} from "@angular/router";



@NgModule({
    declarations: [
        ProfileComponent,
        EditAccountComponent,
        CreateReqFormComponent,
        CreateDocFormComponent,
        DocumentSpaceComponent,
        SideNavComponent
    ],
    exports: [
      ProfileComponent,
      EditAccountComponent,
      CreateReqFormComponent,
      CreateDocFormComponent,
      DocumentSpaceComponent,
      SideNavComponent
    ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    MatBadgeModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule
  ]
})
export class SharedModule { }
