// import { Injectable } from "@angular/core";
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Observable, throwError, of } from 'rxjs';
// import { catchError, tap } from 'rxjs/operators';



// @Injectable({
//     providedIn: 'root'
// })

// export class BilletService {

//   private billetsUrl = 'api/billets';
//   Billets: IBillet[]
//   // employees/employees.json';
//   constructor(private http: HttpClient) {
//     this.initializeData();
//   }
  
//   initializeData(){
//     this.Billets = [
//       {
//           "id": 1,
//           "functionalTitle": "UI/UX Software Developer",
//           "lCat": "Software/Web Developer-Level 1",
//           "startDate": 2018,
//           "company": "CON",      
//         },
//         {
//           "id": 2,
//           "functionalTitle": "UI/UX Software Developer",
//           "lCat": "Software/Web Developer-Level 2",
//           "startDate": 2018,
//           "company": "CON",      
//           },
//           {
//             "id": 3,
//           "functionalTitle": "UI/UX Software Developer",
//           "lCat": "Software/Web Developer-Level 3",
//           "startDate": 2018,
//           "company": "CON",   
//           },
//           {
//             "id": 4,
//           "functionalTitle": "UI/UX Software Developer",
//           "lCat": "Software/Web Developer-Level 4",
//           "startDate": 2018,
//           "company": "CON",      
//           },
//           {
//             "id": 5,
//           "functionalTitle": "UI/UX Software Developer",
//           "lCat": "Software/Web Developer-Level 5",
//           "startDate": 2018,
//           "company": "CON",      
//           },
//           {
//             "id": 6,
//           "functionalTitle": "UI/UX Software Developer",
//           "lCat": "Software/Web Developer-Level 6",
//           "startDate": 2018,
//           "company": "CON",       
//           },
//           {
//             "id": 7,
//           "functionalTitle": "UI/UX Software Developer",
//           "lCat": "Software/Web Developer-Level 7",
//           "startDate": 2018,
//           "company": "CON",       
//           }
//   ];
//   }

//   // getBillets(): Observable<IBillet[]> {
//   //     return this.http.get<IBillet[]>(this.billetsUrl).pipe(
//   //       tap(data => console.log(JSON.stringify(data))),
//   //       catchError(this.handleError)
//   //     );

//   //     return this.Billets;
//   // }


//   getBillets(): Observable<IBillet[]> {
//     console.log('returning billet service');
//     return of(this.Billets);
//   }

//   getBillet(id: number): Observable<IBillet> {
//     if (id === 0) {
//       return of(this.initializeBillets());
//     }
//     const url = `${this.billetsUrl}/${id}`;
//     return this.http.get<IBillet>(url)
//       .pipe(
//         tap(data => console.log('getBillet: ' + JSON.stringify(data))),
//         catchError(this.handleError)
//       );
//   }

//   private handleError(err: HttpErrorResponse) {
//     let errorMessage = '';
//     if (err.error instanceof ErrorEvent) {
//       errorMessage = 'An error occured: ${err.error.message}';
//     } else {
//       errorMessage = 'Server returned code: ${err.status}, error message is: ${err.message}';
//     }
//     console.error(errorMessage);
//     return throwError(errorMessage);
//   }

//   private initializeBillets(): IBillet {
//     // Return an initialized object
//     return {
//       id: 0,
//       functionalTitle: null,
//       lCat: null,
//       startDate: null,
//       company: null,      
//     };
//   }
// }


//---------------------------------------------------

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IBillet } from '../billets/billets.component';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class BilletService {

private billetsUrl = 'http://172.31.98.146/DeeaRoster/Api';

  constructor(private http: HttpClient) {
  }

  getBillets(): Observable<IBillet[]> {
      return this.http.get<IBillet[]>(this.billetsUrl + "/billets");
  }

  getBillet(BilletId: number): Observable<IBillet> {
    const url = this.billetsUrl + '/billet/' + BilletId.toString();
    return this.http.get<IBillet>(url);
  }

  addBillet(billet: IBillet): Observable<IBillet> {
      return this.http.post<IBillet>(this.billetsUrl + "/CreateBillet", billet, httpOptions);
  }

  updateBillet(billet: IBillet): Observable<any> {
      return this.http.put(this.billetsUrl + "/EditBillet", billet, httpOptions);
  }

  deleteBillet(billet: IBillet | number): Observable<IBillet> {
      const id = typeof billet === 'number' ? billet : billet.BilletId;
      const url = `${this.billetsUrl + "/DeleteBillet"}/$id}`;

      return this.http.delete<IBillet>(url, httpOptions);
  }
  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
}
}
