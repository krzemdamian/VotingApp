import { Candidate } from './../models/candidate.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Voter } from '../models/voter.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VotersServiceService {
  readonly apiUrl: string = 'http://localhost:5000/api';

  constructor(readonly http: HttpClient) { 
  }

  public getAll(): Observable<Voter[]> {
    return this.http.get<Voter[]>(this.apiUrl + '/voters');
  }

  public addVoter(voter: Voter): Observable<any> {
    return this.http.post<Voter>(this.apiUrl + '/voters', voter);
  }

  public vote(voter: Voter, candidate: Candidate): Observable<any> {
    return this.http.post<number>(this.apiUrl + `/voters/${voter.id}/vote`, candidate.id);
  }
}
