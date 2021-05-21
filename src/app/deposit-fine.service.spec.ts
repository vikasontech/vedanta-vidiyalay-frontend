import { TestBed } from '@angular/core/testing';

import { DepositFineService } from './deposit-fine.service';

describe('DepositFineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepositFineService = TestBed.get(DepositFineService);
    expect(service).toBeTruthy();
  });
});
