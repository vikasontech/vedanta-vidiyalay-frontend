import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryDueFeeComponent } from './query-due-fee.component';

describe('QueryDueFeeComponent', () => {
  let component: QueryDueFeeComponent;
  let fixture: ComponentFixture<QueryDueFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryDueFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryDueFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
