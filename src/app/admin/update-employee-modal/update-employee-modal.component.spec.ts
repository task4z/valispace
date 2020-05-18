import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeModalComponent } from './update-employee-modal.component';

describe('UpdateEmployeeModalComponent', () => {
  let component: UpdateEmployeeModalComponent;
  let fixture: ComponentFixture<UpdateEmployeeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
