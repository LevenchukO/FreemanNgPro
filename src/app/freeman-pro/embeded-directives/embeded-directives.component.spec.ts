import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbededDirectivesComponent } from './embeded-directives.component';

describe('EmbededDirectivesComponent', () => {
  let component: EmbededDirectivesComponent;
  let fixture: ComponentFixture<EmbededDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbededDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbededDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
