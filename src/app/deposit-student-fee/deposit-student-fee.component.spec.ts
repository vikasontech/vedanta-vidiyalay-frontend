import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositStudentFeeComponent } from './deposit-student-fee.component';

describe('DepositStudentFeeComponent', () => {
  let component: DepositStudentFeeComponent;
  let fixture: ComponentFixture<DepositStudentFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositStudentFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositStudentFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
