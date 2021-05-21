import { TestBed } from '@angular/core/testing';

import { UpdateStudentDetailsService } from './update-student-details.service';

describe('UpdateStudentDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateStudentDetailsService = TestBed.get(UpdateStudentDetailsService);
    expect(service).toBeTruthy();
  });
});
