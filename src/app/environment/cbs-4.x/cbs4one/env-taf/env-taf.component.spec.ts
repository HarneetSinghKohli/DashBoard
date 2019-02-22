import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvTafComponent } from './env-taf.component';

describe('EnvTafComponent', () => {
  let component: EnvTafComponent;
  let fixture: ComponentFixture<EnvTafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvTafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvTafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
