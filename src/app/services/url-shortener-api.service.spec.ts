import { TestBed } from '@angular/core/testing';

import { UrlShortenerApiService } from './url-shortener-api.service';

describe('UrlShortenerApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrlShortenerApiService = TestBed.get(UrlShortenerApiService);
    expect(service).toBeTruthy();
  });
});
