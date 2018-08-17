import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IEmployee } from '../employees/employee';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  // private employeesUrl = 'http://localhost:51146/api';
private employeesUrl = 'http://172.31.98.146/DeeaRoster/api';

  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<IEmployee[]> {
      return this.http.get<IEmployee[]>(this.employeesUrl + '/employees');
  }

  getClearedEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.employeesUrl + '/GetClearedEmployees');
  }

  getUnclearedEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.employeesUrl + '/GetUnclearedEmployees');
  }

  getEmployee(RosterId: number): Observable<IEmployee> {
    const url = this.employeesUrl + '/employee/' + RosterId.toString();
    return this.http.get<IEmployee>(url);
  }
  addEmployee(employee: IEmployee): Observable<IEmployee> {
      return this.http.post<IEmployee>(this.employeesUrl, employee, httpOptions);
  }

  updateEmployee(employee: IEmployee): Observable<any> {
      return this.http.put(this.employeesUrl, employee, httpOptions);
  }

  deleteEmployee(employee: IEmployee | number): Observable<IEmployee> {
      const id = typeof employee === 'number' ? employee : employee.RosterId;
      const url = `${this.employeesUrl}/$id}`;

      return this.http.delete<IEmployee>(url, httpOptions);
  }
  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
}
}
