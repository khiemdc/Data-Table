import { Component, OnInit, ViewChild } from '@angular/core';
import { ICandidate } from './candidate';
import { CandidateService } from '../services/candidate.service';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';
import { DataSource } from '@angular/cdk/table';


@Component({
    templateUrl: './candidate-list.component.html',
    styleUrls: ['candidate-list.component.css']
})

export class CandidateListComponent implements OnInit {
    pageTitle = 'Candidate List';
    candidates: ICandidate[] = [];
    path: string[] = ['candidate'];
    order = 1;

    dataSource ;
    displayedColumns: string[] = ['CandidateId', 'FirstName', 'MiddleName', 'LastName',
                                    'Address', 'Address2', 'City', 'State', 'ZipCode', 'Phone','Fax', 'Email', 'Website', 'Comments', 'Actions'];

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }
    constructor(private candidateService: CandidateService) {
    }

    ngOnInit(): void {
        // this.getCandidates();
        // this.dataSource.sort = this.sort;
        this.candidateService.getCandidates()
        .subscribe(candidates => {
                if (!candidates) {
                    return;
                }
                this.dataSource = new MatTableDataSource(candidates);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
            // }this.candidates = candidates);
            });
    }

    // getCandidates(): void {
    //     this.candidateService.getCandidates()
    //     .subscribe(candidates => {
    //             if (!candidates) {
    //                 return;
    //             }
    //             this.dataSource = new MatTableDataSource(candidates);
    //         // }this.candidates = candidates);
    //         });
    }
    // sortTable(prop: string) {
    //   this.path = prop.split('.');
    //   this.order = this.order * (-1);
    //   return false;
    // }


