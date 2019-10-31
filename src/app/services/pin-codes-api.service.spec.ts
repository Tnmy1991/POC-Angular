import { TestBed } from '@angular/core/testing';

import { PinCodesApiService } from './pin-codes-api.service';

describe('PinCodesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PinCodesApiService = TestBed.get(PinCodesApiService);
    expect(service).toBeTruthy();
  });
});
