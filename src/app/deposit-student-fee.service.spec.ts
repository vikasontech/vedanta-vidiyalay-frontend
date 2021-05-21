import { TestBed } from '@angular/core/testing';

import { DepositStudentFeeService } from './deposit-student-fee.service';

describe('DepositStudentFeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepositStudentFeeService = TestBed.get(DepositStudentFeeService);
    expect(service).toBeTruthy();
  });
});
