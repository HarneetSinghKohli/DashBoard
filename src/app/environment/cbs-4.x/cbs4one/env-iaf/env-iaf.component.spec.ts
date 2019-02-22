import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvIafComponent } from './env-iaf.component';

describe('EnvIafComponent', () => {
  let component: EnvIafComponent;
  let fixture: ComponentFixture<EnvIafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvIafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvIafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
