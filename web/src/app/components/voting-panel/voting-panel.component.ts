import { DataProviderServiceService } from './../../services/data-provider-service.service';
import { Candidate } from './../../models/candidate.model';
import { Voter } from './../../models/voter.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-voting-panel',
  templateUrl: './voting-panel.component.html',
  styleUrls: ['./voting-panel.component.scss']
})
export class VotingPanelComponent implements OnInit, OnDestroy{
  public voters: Voter[] = [];
  public selectedVoter: Voter | undefined;

  public candidates: Candidate[] = [];
  public selectedCandidate: Candidate | undefined;
  
  private sub: Subscription = new Subscription();

  constructor(readonly dataProvider: DataProviderServiceService) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub.add(this.dataProvider.voters$.subscribe(voters => this.voters = voters.filter(voter => voter.hasVoted == false)));
    this.sub.add(this.dataProvider.candidates$.subscribe(candidates => this.candidates  = candidates));
  }

  public vote() {
    if (this.selectedVoter && this.selectedCandidate) {
      this.dataProvider.vote(this.selectedVoter, this.selectedCandidate);
    }
  }
}
