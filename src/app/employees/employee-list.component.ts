import { Component, OnInit, ViewChild } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from '../services/employee.service';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';
import { DataSource } from '@angular/cdk/table';


@Component({
    templateUrl: './employee-list.component.html',
    styleUrls: ['employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
    pageTitle = 'Employee List';
    employees: IEmployee[] = [];
    path: string[] = ['employee'];
    order = 1;

    dataSourceAll ;
    displayedColumns: string[] = ['RosterId', 'Name', 'Company', 'Functional_Title',
                                    'E_SITE_IDIQ_LCAT', 'Start_Date', 'Location', 'eMail_Address', 'Phone_Number', 'Clearance', 'Actions'];

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    applyFilter(filterValue: string) {
        this.dataSourceAll.filter = filterValue.trim().toLowerCase();
      }
    constructor(private employeeService: EmployeeService) {
    }

    ngOnInit(): void {
        // this.getEmployees();
        // this.dataSource.sort = this.sort;
        this.employeeService.getEmployees()
        .subscribe(employees => {
                if (employees) {
                    this.dataSourceAll = new MatTableDataSource(employees);
                    this.dataSourceAll.sort = this.sort;
                    this.dataSourceAll.paginator = this.paginator;
                }
            // }this.employees = employees);
            });
    }

    // getEmployees(): void {
    //     this.employeeService.getEmployees()
    //     .subscribe(employees => {
    //             if (!employees) {
    //                 return;
    //             }
    //             this.dataSource = new MatTableDataSource(employees);
    //         // }this.employees = employees);
    //         });
    }
    // sortTable(prop: string) {
    //   this.path = prop.split('.');
    //   this.order = this.order * (-1);
    //   return false;
    // }


