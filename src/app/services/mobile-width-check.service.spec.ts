import { TestBed } from '@angular/core/testing';

import { MobileWidthCheckService } from './mobile-width-check.service';

describe('MobileWidthCheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MobileWidthCheckService = TestBed.get(MobileWidthCheckService);
    expect(service).toBeTruthy();
  });
});
