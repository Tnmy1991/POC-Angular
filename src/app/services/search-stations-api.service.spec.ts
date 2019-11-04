import { TestBed } from '@angular/core/testing';

import { SearchStationsApiService } from './search-stations-api.service';

describe('SearchStationsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchStationsApiService = TestBed.get(SearchStationsApiService);
    expect(service).toBeTruthy();
  });
});
