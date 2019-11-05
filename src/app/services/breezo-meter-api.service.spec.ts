import { TestBed } from '@angular/core/testing';

import { BreezoMeterApiService } from './breezo-meter-api.service';

describe('BreezoMeterApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BreezoMeterApiService = TestBed.get(BreezoMeterApiService);
    expect(service).toBeTruthy();
  });
});
