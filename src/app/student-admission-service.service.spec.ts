import { TestBed } from '@angular/core/testing';

import { StudentAdmissionServiceService } from './student-admission-service.service';

describe('StudentAdmissionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentAdmissionServiceService = TestBed.get(StudentAdmissionServiceService);
    expect(service).toBeTruthy();
  });
});
