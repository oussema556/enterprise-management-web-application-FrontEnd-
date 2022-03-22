import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { TeamLeaveRequestsComponent } from './components/team-leave-requests/team-leave-requests.component';
import { TeamTableComponent } from './components/team-table/team-table.component';
import { DocumentSpaceComponent } from './components/document-space/document-space.component';



@NgModule({
  declarations: [
    DashboardComponent,
    TeamLeaveRequestsComponent,
    TeamTableComponent,
    DocumentSpaceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ManagerModule { }
