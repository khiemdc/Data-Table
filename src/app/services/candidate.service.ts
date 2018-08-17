import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ICandidate } from '../candidates/candidate';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class CandidateService {

//   private candidatesUrl = 'http://localhost:51146/api/';
private candidatesUrl = 'http://172.31.98.146/DeeaRoster/api';

  constructor(private http: HttpClient) {
  }

  getCandidates(): Observable<ICandidate[]> {
      return this.http.get<ICandidate[]>(this.candidatesUrl + '/candidates');
  }

  getCandidate(CandidateId: number): Observable<ICandidate> {
    const url = this.candidatesUrl + '/candidate/' + CandidateId.toString();
    return this.http.get<ICandidate>(url);
  }
  addCandidate(candidate: ICandidate): Observable<ICandidate> {
      return this.http.post<ICandidate>(this.candidatesUrl, candidate, httpOptions);
  }

  updateCandidate(candidate: ICandidate): Observable<any> {
      return this.http.put(this.candidatesUrl, candidate, httpOptions);
  }

  deleteCandidate(candidate: ICandidate | number): Observable<ICandidate> {
      const id = typeof candidate === 'number' ? candidate : candidate.CandidateId;
      const url = `${this.candidatesUrl}/$id}`;

      return this.http.delete<ICandidate>(url, httpOptions);
  }
  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
}
}
