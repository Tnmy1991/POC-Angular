import { TestBed } from '@angular/core/testing';

import { WikiSynonymApiService } from './wiki-synonym-api.service';

describe('WikiSynonymApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WikiSynonymApiService = TestBed.get(WikiSynonymApiService);
    expect(service).toBeTruthy();
  });
});
