import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvPf2DetailComponent } from './env-pf2-detail.component';

describe('EnvPf2DetailComponent', () => {
  let component: EnvPf2DetailComponent;
  let fixture: ComponentFixture<EnvPf2DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvPf2DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvPf2DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
