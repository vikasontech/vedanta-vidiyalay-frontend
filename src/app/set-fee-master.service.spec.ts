import { TestBed } from '@angular/core/testing';

import { SetFeeMasterService } from './set-fee-master.service';

describe('SetFeeMasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetFeeMasterService = TestBed.get(SetFeeMasterService);
    expect(service).toBeTruthy();
  });
});
