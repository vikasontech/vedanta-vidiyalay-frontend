import { TestBed } from '@angular/core/testing';

import { QueryFineRecordService } from './query-fine-record.service';

describe('QueryFineRecordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QueryFineRecordService = TestBed.get(QueryFineRecordService);
    expect(service).toBeTruthy();
  });
});
