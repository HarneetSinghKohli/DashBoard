import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvIm3Component } from './env-im3.component';

describe('EnvIafComponent', () => {
  let component: EnvIm3Component;
  let fixture: ComponentFixture<EnvIm3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvIm3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvIm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
