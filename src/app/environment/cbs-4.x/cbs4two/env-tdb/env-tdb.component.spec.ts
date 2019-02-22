import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvTdbComponent } from './env-tdb.component';

describe('EnvTafComponent', () => {
  let component: EnvTdbComponent;
  let fixture: ComponentFixture<EnvTdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvTdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvTdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
