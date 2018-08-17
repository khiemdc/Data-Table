import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeService } from '../services/employee.service';
import { get } from 'http';


@Component({
  // selector: 'pm-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  pageTitle = 'Edit';
  employeeForm: FormGroup;
  RosterId: number;
  errorMessage: any;

  constructor(private router: Router) {

  }

  ngOnInit() {

}
cancel(): void {
  this.router.navigate(['/employees']);
}

}
