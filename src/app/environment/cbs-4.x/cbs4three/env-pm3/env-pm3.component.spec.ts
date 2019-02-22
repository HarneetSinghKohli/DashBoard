import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvPm3Component } from './env-pm3.component';

describe('EnvPdbComponent', () => {
  let component: EnvPm3Component;
  let fixture: ComponentFixture<EnvPm3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvPm3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvPm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
