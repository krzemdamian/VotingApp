import { TestBed } from '@angular/core/testing';

import { CandidatesServiceService } from './candidates-service.service';

describe('CandidateServiceService', () => {
  let service: CandidatesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
