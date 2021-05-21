import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetFeeMasterComponent } from './set-fee-master.component';

describe('SetFeeMasterComponent', () => {
  let component: SetFeeMasterComponent;
  let fixture: ComponentFixture<SetFeeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetFeeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetFeeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
