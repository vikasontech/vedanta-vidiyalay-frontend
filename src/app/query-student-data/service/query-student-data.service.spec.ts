import { TestBed } from '@angular/core/testing';
import { QueryStudentDataService } from './query-student-data.service';


describe('QueryStudentDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QueryStudentDataService = TestBed.get(QueryStudentDataService);
    expect(service).toBeTruthy();
  });
});
