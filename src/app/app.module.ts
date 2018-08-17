import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatMenuModule, MatIconModule,
        MatTableModule, MatSortModule, MatPaginatorModule, MatProgressSpinnerModule, MatListModule,
        MatTabsModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, 
        MatToolbarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EmployeeEditComponent } from './employees/employee-edit.component';
import { CandidateEditComponent } from './candidates/candidate-edit.component';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employees/employee-list.component';
import { CandidateListComponent } from './candidates/candidate-list.component';
import { FilterPipe } from './shared/filter.pipe';
import { EmployeeDetailComponent } from './employees/employee-detail.component';
import { CandidateDetailComponent } from './candidates/candidate-detail.component';
import { BilletsComponent } from './billets/billets.component';
import { AppRoutingModule } from './app-routing.module';
import { ReportingComponent } from './reporting/reporting.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SortEmployeesPipe } from './shared/sort.pipe';
import { SecurityComponent } from './security/security.component';
import { SecurityTrackComponent } from './security/security-track.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { AddressComponent } from './employee-form/address/address.component';
import { ProgressbarComponent } from './employee-form/progressbar/progressbar.component';
import { PersonalComponent } from './employee-form/personal/personal.component';
import { ResultComponent } from './employee-form/result/result.component';
import { WorkComponent } from './employee-form/work/work.component';
import { FormDataService } from './employee-form/data/formData.service';
import { WorkflowService } from './employee-form/workflow/workflow.service';
import { SecurityFormComponent } from './employee-form/security-form/security-form.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CandidateListComponent,
    FilterPipe,
    SortEmployeesPipe,
    EmployeeDetailComponent,
    EmployeeEditComponent,
    CandidateDetailComponent,
    CandidateEditComponent,
    BilletsComponent,
    ReportingComponent,
    ReportingComponent,
    NavbarComponent,
    HomeComponent,
    SecurityComponent,
    SecurityTrackComponent,
    
    EmployeeFormComponent,

    AddressComponent,
    ProgressbarComponent,
    PersonalComponent,
    ResultComponent,
    WorkComponent,
    SecurityFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatListModule,
    MatTabsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatToolbarModule,


    AppRoutingModule
  ],
  entryComponents: [
    SecurityTrackComponent
  ],
  exports: [SortEmployeesPipe],
  providers: [
    { provide: FormDataService, useClass: FormDataService },
    { provide: WorkflowService, useClass: WorkflowService }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
