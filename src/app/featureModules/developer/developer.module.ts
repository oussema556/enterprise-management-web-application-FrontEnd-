import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { DocumentSpaceComponent } from './components/document-space/document-space.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DocumentSpaceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DeveloperModule { }
