import { Component, OnInit, ViewChild } from '@angular/core';
import { BilletService } from "../services/billet.service";
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-billets',
  templateUrl: './billets.component.html',
  styleUrls: ['./billets.component.css']
})

export class BilletsComponent implements OnInit {
  pageTitle = 'Billet List';
  billets: IBillet[] = [];
  path: string[] = ['billet'];
  order = 1;

  dataSource ;
  displayedColumns: string[] = ['BilletId', 'Functional_Title', 'LCat', 'Start_Date', 'Company', 'Actions'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private billetService: BilletService) {
  }

  ngOnInit(): void {
      this.billetService.getBillets()
      .subscribe(billets => {
              if (!billets) {
                  return;
              }
              this.dataSource = new MatTableDataSource(billets);
              this.dataSource.sort = this.sort;
              this.dataSource.paginator = this.paginator;
          });
  }
}

export interface IBillet {
  BilletId: number;
  FunctionalTilte: string;
  lCat: string;
  StartDate: string;
  Company: string;
}
