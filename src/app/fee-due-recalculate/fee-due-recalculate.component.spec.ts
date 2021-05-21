import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeDueRecalculateComponent } from './fee-due-recalculate.component';

describe('FeeDueRecalculateComponent', () => {
  let component: FeeDueRecalculateComponent;
  let fixture: ComponentFixture<FeeDueRecalculateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeDueRecalculateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeDueRecalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
