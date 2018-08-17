import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BilletsComponent } from './billets/billets.component';
import { EmployeeEditComponent } from './employees/employee-edit.component';
import { ReportingComponent } from './reporting/reporting.component';
import { EmployeeListComponent } from './employees/employee-list.component';
import { EmployeeDetailComponent } from './employees/employee-detail.component';
import { HomeComponent } from './home/home.component';
import {CandidateListComponent} from './candidates/candidate-list.component';
import { CandidateDetailComponent } from './candidates/candidate-detail.component';
import { CandidateEditComponent } from './candidates/candidate-edit.component';
import { SecurityComponent } from './security/security.component';
import { SecurityTrackComponent } from './security/security-track.component';

import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { PersonalComponent } from './employee-form/personal/personal.component';
import { WorkComponent } from './employee-form/work/work.component';
import { AddressComponent } from './employee-form/address/address.component';
import { ResultComponent } from './employee-form/result/result.component';

import { WorkflowGuard } from './employee-form/workflow/workflow-guard.service';
import { WorkflowService } from './employee-form/workflow/workflow.service';
import { SecurityFormComponent } from './employee-form/security-form/security-form.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'billets', component: BilletsComponent },
  { path: 'employees', component: EmployeeListComponent },
  {path: 'candidates', component: CandidateListComponent},
  { path: 'home', component: HomeComponent },
  {path: 'candidates/:id', component: CandidateDetailComponent},
  {path: 'candidates/:id/edit', component: CandidateEditComponent},
  {path: 'employee/:id', component: EmployeeDetailComponent},
  { path: 'employee/:id/edit', component: EmployeeEditComponent},
  { path: 'security', component: SecurityComponent },
  { path: 'security/:id/track', component: SecurityTrackComponent },
  { path: 'reporting', component: ReportingComponent },
  
  { path: 'employeeForm', component: EmployeeFormComponent },
  // Personal Route
  { path: 'employeeForm/personal',  component: PersonalComponent },
  // Work Route
  { path: 'employeeForm/work',  component: WorkComponent },
  // Address Route
  { path: 'employeeForm/address',  component: AddressComponent },
  // Security Route
  { path: 'employeeForm/security-form',  component: SecurityFormComponent },
  // Result Route
  { path: 'employeeForm/result',  component: ResultComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
