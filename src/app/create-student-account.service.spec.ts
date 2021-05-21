import { TestBed } from '@angular/core/testing';

import { CreateStudentAccountService } from './create-student-account.service';

describe('CreateStudentAccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateStudentAccountService = TestBed.get(CreateStudentAccountService);
    expect(service).toBeTruthy();
  });
});
