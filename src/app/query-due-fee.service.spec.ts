import { TestBed } from '@angular/core/testing';

import { QueryDueFeeService } from './query-due-fee.service';

describe('QueryDueFeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QueryDueFeeService = TestBed.get(QueryDueFeeService);
    expect(service).toBeTruthy();
  });
});
