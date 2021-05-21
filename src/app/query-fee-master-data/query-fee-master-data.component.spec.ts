import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryFeeMasterDataComponent } from './query-fee-master-data.component';

describe('QueryFeeMasterDataComponent', () => {
  let component: QueryFeeMasterDataComponent;
  let fixture: ComponentFixture<QueryFeeMasterDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryFeeMasterDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryFeeMasterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
