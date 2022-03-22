import { TestBed } from '@angular/core/testing';

import { VotersServiceService } from './voters-service.service';

describe('VotersServiceService', () => {
  let service: VotersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VotersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
