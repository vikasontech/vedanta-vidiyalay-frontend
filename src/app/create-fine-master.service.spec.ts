import { TestBed } from '@angular/core/testing';

import { CreateFineMasterService } from './create-fine-master.service';

describe('CreateFineMasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateFineMasterService = TestBed.get(CreateFineMasterService);
    expect(service).toBeTruthy();
  });
});
