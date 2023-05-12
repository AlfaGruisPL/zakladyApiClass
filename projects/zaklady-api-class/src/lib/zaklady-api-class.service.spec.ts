import { TestBed } from '@angular/core/testing';

import { ZakladyApiClassService } from './zaklady-api-class.service';

describe('ZakladyApiClassService', () => {
  let service: ZakladyApiClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZakladyApiClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
