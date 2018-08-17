import { Component, OnInit, ViewChild } from '@angular/core';
import { IEmployee } from '../employees/employee';
import { EmployeeService } from '../services/employee.service';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog} from '@angular/material';
import { SecurityTrackComponent } from './security-track.component';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  pageTitle = 'Employee List';
  employees: IEmployee[] = [];
  clearedEmployees: IEmployee[] = [];
  unclearedEmployees: IEmployee[] = [];

  dataSourceAll ;
  dataSourceCleared;
  dataSourceUncleared;
  displayedColumns: string[] = ['Name', 'Start_Date', 'Clearance', 'Actions'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private employeeService: EmployeeService, public dialog: MatDialog) { }

  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe(employees => {
          if (employees) {
            this.dataSourceAll = new MatTableDataSource(employees);
            this.dataSourceAll.sort = this.sort;
            this.dataSourceAll.paginator = this.paginator;
          }
      });
      this.employeeService.getClearedEmployees()
      .subscribe(clearedEmployees => {
          if (clearedEmployees) {
            this.dataSourceCleared = new MatTableDataSource(clearedEmployees);
            this.dataSourceCleared.sort = this.sort;
            this.dataSourceCleared.paginator = this.paginator;
          }
      });
      this.employeeService.getUnclearedEmployees()
      .subscribe(unClearedEmployees => {
        if (unClearedEmployees) {
          this.dataSourceUncleared = new MatTableDataSource(unClearedEmployees);
          this.dataSourceUncleared.sort = this.sort;
          this.dataSourceUncleared.paginator = this.paginator;
        }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SecurityTrackComponent, {
      width: '900px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}
