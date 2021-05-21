import { TestBed } from '@angular/core/testing';

import { SchollerReportService } from './scholler-report.service';

describe('SchollerReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SchollerReportService = TestBed.get(SchollerReportService);
    expect(service).toBeTruthy();
  });
});
