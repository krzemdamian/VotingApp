import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {
  public candidates: any[] = []

  constructor() { }

  ngOnInit(): void {
    this.candidates = [{ name: 'Candidate 1', Votes: 2 }];
  }

}
