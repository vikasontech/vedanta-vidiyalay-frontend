import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFineMasterComponent } from './create-fine-master.component';

describe('CreateFineMasterComponent', () => {
  let component: CreateFineMasterComponent;
  let fixture: ComponentFixture<CreateFineMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFineMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFineMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
