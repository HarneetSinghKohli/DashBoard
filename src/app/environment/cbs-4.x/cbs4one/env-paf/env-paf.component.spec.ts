import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvPafComponent } from './env-paf.component';

describe('EnvPafComponent', () => {
  let component: EnvPafComponent;
  let fixture: ComponentFixture<EnvPafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvPafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvPafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
