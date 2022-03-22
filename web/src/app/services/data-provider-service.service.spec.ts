import { TestBed } from '@angular/core/testing';

import { DataProviderServiceService } from './data-provider-service.service';

describe('DataProviderServiceService', () => {
  let service: DataProviderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataProviderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
