import { TestBed } from '@angular/core/testing';

import { NumbersFactsApiService } from './numbers-facts-api.service';

describe('NumbersFactsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumbersFactsApiService = TestBed.get(NumbersFactsApiService);
    expect(service).toBeTruthy();
  });
});
