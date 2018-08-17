import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';
 
import { FormDataService }     from '../data/formData.service';
 
@Component ({
    selector:     'mt-wizard-security',
    templateUrl: './security-form.component.html'
})
 
export class SecurityFormComponent implements OnInit {
    title = 'Security Clearance Status';
    securityStatus: string;
    form: any;
    
    constructor(private router: Router, private formDataService: FormDataService) {
    }
 
    ngOnInit() {
        this.securityStatus = this.formDataService.getSecurity();
        console.log('Security feature loaded!');
    }
 
    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
        
        this.formDataService.setSecurity(this.securityStatus);
        return true;
    }
 
    goToPrevious(form: any) {
        if (this.save(form)) {
            // Navigate to the personal page
            this.router.navigate(['employeeForm/address']);
        }
    }
 
    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the address page
            this.router.navigate(['employeeForm/result']);
        }
    }
}