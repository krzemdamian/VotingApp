import { Candidate } from './../../models/candidate.model';
import { RandomNameGeneratorService } from './../../services/random-name-generator.service';
import { DataProviderServiceService } from './../../services/data-provider-service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit, OnDestroy {
  readonly defaultRandomNameLength = 8;

  public candidates: any[] = []

  private sub: Subscription = new Subscription();

  constructor(
    readonly dataProvider: DataProviderServiceService,
    readonly nameGenerator: RandomNameGeneratorService) { }

  ngOnInit(): void {
    this.sub.add(this.dataProvider.candidates$.subscribe(candidates => this.candidates = candidates));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public generateCandidate(): void {
    const randomName = this.nameGenerator.generateName(this.defaultRandomNameLength);
    const newCandidate = { id: -1, name: randomName, votes: 0 } as Candidate;
    this.dataProvider.addCandidate(newCandidate);
  }
}
