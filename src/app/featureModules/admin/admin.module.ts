import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';
import { RequestsTableComponent } from './components/requests-table/requests-table.component';
import { DocumentsTableComponent } from './components/documents-table/documents-table.component';
import { EditEmployeeFormComponent } from './components/edit-employee-form/edit-employee-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    EmployeesTableComponent,
    RequestsTableComponent,
    DocumentsTableComponent,
    EditEmployeeFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
