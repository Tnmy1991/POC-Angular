import { TestBed } from '@angular/core/testing';

import { EmailValidationApiService } from './email-validation-api.service';

describe('EmailValidationApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailValidationApiService = TestBed.get(EmailValidationApiService);
    expect(service).toBeTruthy();
  });
});
