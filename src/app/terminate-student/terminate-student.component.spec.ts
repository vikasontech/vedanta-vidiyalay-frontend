import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminateStudentComponent } from './terminate-student.component';

describe('TerminateStudentComponent', () => {
  let component: TerminateStudentComponent;
  let fixture: ComponentFixture<TerminateStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminateStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminateStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
