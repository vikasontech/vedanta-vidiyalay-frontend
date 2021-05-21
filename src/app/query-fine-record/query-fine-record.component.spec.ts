import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryFineRecordComponent } from './query-fine-record.component';

describe('QueryFineRecordComponent', () => {
  let component: QueryFineRecordComponent;
  let fixture: ComponentFixture<QueryFineRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryFineRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryFineRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
