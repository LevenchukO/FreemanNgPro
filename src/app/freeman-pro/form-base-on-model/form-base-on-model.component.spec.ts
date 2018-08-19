import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBaseOnModelComponent } from './form-base-on-model.component';

describe('FormBaseOnModelComponent', () => {
  let component: FormBaseOnModelComponent;
  let fixture: ComponentFixture<FormBaseOnModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBaseOnModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBaseOnModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
