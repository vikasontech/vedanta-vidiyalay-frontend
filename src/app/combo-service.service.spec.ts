import { TestBed } from '@angular/core/testing';

import { ComboServiceService } from './combo-service.service';

describe('ComboServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComboServiceService = TestBed.get(ComboServiceService);
    expect(service).toBeTruthy();
  });
});
