import { TestBed } from '@angular/core/testing';

import { QueryFeeMasterDataService } from '../../query-fee-master-data.service';

describe('QueryFeeMasterDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QueryFeeMasterDataService = TestBed.get(QueryFeeMasterDataService);
    expect(service).toBeTruthy();
  });
});
