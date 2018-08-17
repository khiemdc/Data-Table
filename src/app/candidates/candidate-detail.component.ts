import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { $ } from 'protractor';

import { Subscription } from 'rxjs';

import {  ICandidate } from './candidate';
import { CandidateService } from '../services/candidate.service';


@Component({
  // selector: 'pm-product-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})
export class CandidateDetailComponent implements OnInit {

  pageTitle = 'Candidate Detail';
  errorMessage = '';
  candidate: ICandidate | undefined;
  private sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      params => {
        let id = params['id'];
        this.getCandidate(id);
      });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getCandidate(id: number) {
    this.candidateService.getCandidate(id).subscribe(
      candidate => this.candidate = candidate,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/candidates']);
  }
}
// ngOnInit(): void {
//   const param = this.route.snapshot.paramMap.get('RosterId');
//   if (param) {
//     const id = +param['RosterId'];
//     this.getCandidate(id);
//   }
// }

// getCandidate(RosterId: number) {
//   this.candidateService.getCandidate(RosterId).subscribe(
//     candidate => this.candidate = this.candidate,
//     error => this.errorMessage = <any>error);
// }

// onBack(): void {
//   this.router.navigate(['/candidates']);
// }

// }
