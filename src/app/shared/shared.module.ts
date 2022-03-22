import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { EditAccountComponent } from './components/edit-account/edit-account.component';
import { CreateReqFormComponent } from './components/create-req-form/create-req-form.component';
import { CreateDocFormComponent } from './components/create-doc-form/create-doc-form.component';
import { DocumentSpaceComponent } from './components/document-space/document-space.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';



@NgModule({
  declarations: [
    ProfileComponent,
    EditAccountComponent,
    CreateReqFormComponent,
    CreateDocFormComponent,
    DocumentSpaceComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
