import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryStudentDataComponent } from './query-student-data.component';

describe('QueryStudentDataComponent', () => {
  let component: QueryStudentDataComponent;
  let fixture: ComponentFixture<QueryStudentDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryStudentDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryStudentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
