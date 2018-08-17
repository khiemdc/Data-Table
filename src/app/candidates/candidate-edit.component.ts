import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CandidateListComponent } from './candidate-list.component';
import { CandidateService } from '../services/candidate.service';
import { get } from 'http';


@Component({
  // selector: 'pm-candidate-edit',
  templateUrl: './candidate-edit.component.html',
  styleUrls: ['./candidate-edit.component.css']
})
export class CandidateEditComponent implements OnInit {
  pageTitle = 'Edit';
  candidateForm: FormGroup;
  CandidateId: number;
  errorMessage: any;

  constructor(private router: Router) {

  }

  ngOnInit() {

}

cancel(): void {
  this.router.navigate(['/candidates']);
}

}
