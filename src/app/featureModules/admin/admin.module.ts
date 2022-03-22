import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';
import { RequestsTableComponent } from './components/requests-table/requests-table.component';
import { DocumentsTableComponent } from './components/documents-table/documents-table.component';
import { EditEmployeeFormComponent } from './components/edit-employee-form/edit-employee-form.component';
import { AdminDashboardComponent } from './containers/admin-dashboard/admin-dashboard.component';
import {MaterialModule} from "../../shared/material/material.module";



@NgModule({
  declarations: [
    EmployeesTableComponent,
    RequestsTableComponent,
    DocumentsTableComponent,
    EditEmployeeFormComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class AdminModule { }
