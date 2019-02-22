import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvTm3Component } from './env-tm3.component';

describe('EnvTafComponent', () => {
  let component: EnvTm3Component;
  let fixture: ComponentFixture<EnvTm3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvTm3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvTm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
