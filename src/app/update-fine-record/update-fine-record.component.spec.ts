import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFineRecordComponent } from './update-fine-record.component';

describe('UpdateFineRecordComponent', () => {
  let component: UpdateFineRecordComponent;
  let fixture: ComponentFixture<UpdateFineRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFineRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFineRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
