import { TestBed } from '@angular/core/testing';

import { ChangeStudentAdmissionStatusService } from './change-student-admission-status.service';

describe('ChangeStudentAdmissionStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeStudentAdmissionStatusService = TestBed.get(ChangeStudentAdmissionStatusService);
    expect(service).toBeTruthy();
  });
});
