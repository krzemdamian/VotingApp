import { Candidate } from './../models/candidate.model';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatesServiceService {
  readonly apiUrl: string = 'http://localhost:5000/api';

  constructor(readonly http: HttpClient) { 
  }

  public getAll(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.apiUrl + '/candidates');
  }

  public addCandidate(candidate: Candidate): Observable<any> {
    return this.http.post<Candidate>(this.apiUrl + '/candidates', candidate);
  }
}
