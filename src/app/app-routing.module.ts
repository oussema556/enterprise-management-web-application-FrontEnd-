import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthPageComponent} from "./featureModules/auth/containers/auth-page/auth-page.component";
import {
  DeveloperDashboardComponent
} from "./featureModules/developer/containers/developer-dashboard/developer-dashboard.component";
import {
  ManagerDashboardComponent
} from "./featureModules/manager/containers/manager-dashboard/manager-dashboard.component";
import {AdminDashboardComponent} from "./featureModules/admin/containers/admin-dashboard/admin-dashboard.component";
import {TeamTableComponent} from "./featureModules/manager/components/team-table/team-table.component";
import {ProfileComponent} from "./shared/components/profile/profile.component";

const routes: Routes = [
  {
    path:'auth',
    component:AuthPageComponent
  },
  {
    path:'developer',
    component:DeveloperDashboardComponent,
  },
  {
    path:'manager',
    component:ManagerDashboardComponent,
    children:[
      {
        path:'team',
        component: TeamTableComponent
      },
      {
        path:'teamRequests',
        component: TeamTableComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  },
  {
    path:'admin',
    component:AdminDashboardComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
