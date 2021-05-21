import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperExampleComponentComponent } from './stepper-example-component.component';

describe('StepperExampleComponentComponent', () => {
  let component: StepperExampleComponentComponent;
  let fixture: ComponentFixture<StepperExampleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperExampleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperExampleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
