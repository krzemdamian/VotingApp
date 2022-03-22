import { Candidate } from './../../models/candidate.model';
import { Voter } from './../../models/voter.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voting-panel',
  templateUrl: './voting-panel.component.html',
  styleUrls: ['./voting-panel.component.scss']
})
export class VotingPanelComponent implements OnInit {
  public voters: Voter[] = [];
  public selectedVoter: Voter | undefined;

  public candidates: Candidate[] = [];
  public selectedCandidate: Candidate | undefined;

  constructor() { }

  ngOnInit(): void {
    this.voters = [{ name: "Voter name 1", hasVoted: true }];
    this.candidates = [{ name: "Candidate name 1", votes: 2 }];
  }
}
