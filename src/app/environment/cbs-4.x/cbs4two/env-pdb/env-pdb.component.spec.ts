import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvPdbComponent } from './env-pdb.component';

describe('EnvPdbComponent', () => {
  let component: EnvPdbComponent;
  let fixture: ComponentFixture<EnvPdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvPdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvPdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
