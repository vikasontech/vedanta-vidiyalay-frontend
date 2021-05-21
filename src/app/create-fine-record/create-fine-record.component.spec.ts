import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFineRecordComponent } from './create-fine-record.component';

describe('CreateFineRecordComponent', () => {
  let component: CreateFineRecordComponent;
  let fixture: ComponentFixture<CreateFineRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFineRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFineRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
