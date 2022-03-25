import { Candidate } from './../models/candidate.model';
import { VotersServiceService } from './voters-service.service';
import { CandidatesServiceService } from './candidates-service.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, first, Observable, switchMap } from 'rxjs';
import { Voter } from '../models/voter.model';

@Injectable({
  providedIn: 'root',
})
export class DataProviderServiceService {
  private _voters: BehaviorSubject<Voter[]> = new BehaviorSubject<Voter[]>([]);
  public voters$: Observable<Voter[]> = this._voters.asObservable();

  private _candidates: BehaviorSubject<Candidate[]> = new BehaviorSubject<
    Candidate[]
  >([]);
  public candidates$: Observable<Candidate[]> = this._candidates.asObservable();

  constructor(
    readonly voterService: VotersServiceService,
    readonly candidateService: CandidatesServiceService
  ) {
    this.voterService
      .getAll()
      .pipe(first())
      .subscribe((voters) => this._voters.next(voters));
    this.candidateService
      .getAll()
      .pipe(first())
      .subscribe((candidates) => this._candidates.next(candidates));
  }

  public addVoter(voter: Voter) {
    this.voterService
      .addVoter(voter)
      .pipe(
        switchMap(() => this.voterService.getAll()),
        first()
      )
      .subscribe((voters) => {
        this._voters.next(voters);
      });
  }

  public addCandidate(candidate: Candidate) {
    this.candidateService
      .addCandidate(candidate)
      .pipe(
        first(),
        switchMap(() => this.candidateService.getAll())
      )
      .subscribe((candidates) => {
        this._candidates.next(candidates);
      });
  }

  public vote(voter: Voter, candidate: Candidate) {
    this.voterService
      .vote(voter, candidate)
      .pipe(
        switchMap(() =>
          combineLatest([
            this.voterService.getAll(),
            this.candidateService.getAll(),
          ])
        ),
        first()
      )
      .subscribe(([v, c]) => {
        this._voters.next(v);
        this._candidates.next(c);
      });
  }
}
