import { TestBed } from '@angular/core/testing';

import { RandomNameGeneratorService } from './random-name-generator.service';

describe('RandomNameGeneratorService', () => {
  let service: RandomNameGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomNameGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
