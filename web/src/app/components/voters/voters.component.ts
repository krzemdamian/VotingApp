import { Voter } from './../../models/voter.model';
import { RandomNameGeneratorService } from './../../services/random-name-generator.service';
import { DataProviderServiceService } from './../../services/data-provider-service.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-voters',
  templateUrl: './voters.component.html',
  styleUrls: ['./voters.component.scss']
})
export class VotersComponent implements OnInit {
  readonly defaultRandomNameLength = 8;

  public voters: any[] = [];
  private sub: Subscription = new Subscription();

  constructor(
    readonly dataProvider: DataProviderServiceService,
    readonly nameGenerator: RandomNameGeneratorService) { }

  ngOnInit(): void {
    this.sub.add(this.dataProvider.voters$.subscribe(voters => this.voters = voters));
  }

  public generateVoter(): void {
    const randomName = this.nameGenerator.generateName(this.defaultRandomNameLength);
    const newVoter = { id: -1, name: randomName, hasVoted: false } as Voter;
    this.dataProvider.addVoter(newVoter);
  }

}
