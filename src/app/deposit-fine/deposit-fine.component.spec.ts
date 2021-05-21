import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositFineComponent } from './deposit-fine.component';

describe('DepositFineComponent', () => {
  let component: DepositFineComponent;
  let fixture: ComponentFixture<DepositFineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositFineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositFineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
