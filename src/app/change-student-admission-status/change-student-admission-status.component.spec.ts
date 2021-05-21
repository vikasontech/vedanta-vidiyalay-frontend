import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeStudentAdmissionStatusComponent } from './change-student-admission-status.component';

describe('ChangeStudentAdmissionStatusComponent', () => {
  let component: ChangeStudentAdmissionStatusComponent;
  let fixture: ComponentFixture<ChangeStudentAdmissionStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeStudentAdmissionStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeStudentAdmissionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
