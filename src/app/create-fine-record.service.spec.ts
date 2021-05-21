import { TestBed } from '@angular/core/testing';

import { CreateFineRecordService } from './create-fine-record.service';

describe('CreateFineRecordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateFineRecordService = TestBed.get(CreateFineRecordService);
    expect(service).toBeTruthy();
  });
});
