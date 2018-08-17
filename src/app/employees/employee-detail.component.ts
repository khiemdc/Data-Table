import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { $ } from 'protractor';

import { Subscription } from 'rxjs';

import {  IEmployee } from './employee';
import { EmployeeService } from '../services/employee.service';


@Component({
  // selector: 'pm-product-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  pageTitle = 'Employee Detail';
  errorMessage = '';
  employee: IEmployee | undefined;
  private sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      params => {
        let id = +params['id'];
        this.getEmployee(id);
      });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getEmployee(id: number) {
    this.employeeService.getEmployee(id).subscribe(
      employee => this.employee = employee,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/employees']);
  }
}
// ngOnInit(): void {
//   const param = this.route.snapshot.paramMap.get('RosterId');
//   if (param) {
//     const id = +param['RosterId'];
//     this.getEmployee(id);
//   }
// }

// getEmployee(RosterId: number) {
//   this.employeeService.getEmployee(RosterId).subscribe(
//     employee => this.employee = this.employee,
//     error => this.errorMessage = <any>error);
// }

// onBack(): void {
//   this.router.navigate(['/employees']);
// }

// }
