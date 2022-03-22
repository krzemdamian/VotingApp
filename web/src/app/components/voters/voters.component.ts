import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voters',
  templateUrl: './voters.component.html',
  styleUrls: ['./voters.component.scss']
})
export class VotersComponent implements OnInit {
  public voters: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.voters = [{ name: 'Voter 1', hasVoted: false }]
  }

}
