import { TestBed } from '@angular/core/testing';

import { UpdateFineRecordService } from './update-fine-record.service';

describe('UpdateFineRecordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateFineRecordService = TestBed.get(UpdateFineRecordService);
    expect(service).toBeTruthy();
  });
});
