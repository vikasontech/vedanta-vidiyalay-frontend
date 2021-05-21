import { TestBed } from '@angular/core/testing';

import { TerminateStudentService } from './terminate-student.service';

describe('TerminateStudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TerminateStudentService = TestBed.get(TerminateStudentService);
    expect(service).toBeTruthy();
  });
});
