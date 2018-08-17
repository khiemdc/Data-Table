import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input }   from '@angular/core';
 
import { FormDataService }            from './data/formData.service';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})

export class EmployeeFormComponent implements OnInit {
    title = 'Multi-Step Wizard';
    @Input() formData;
    
    constructor(private formDataService: FormDataService) {
    }
 
    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        console.log(this.title + ' loaded!');
    }
}