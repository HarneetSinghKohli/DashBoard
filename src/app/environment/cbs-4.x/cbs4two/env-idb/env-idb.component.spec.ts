import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvIdbComponent } from './env-idb.component';

describe('EnvIafComponent', () => {
  let component: EnvIdbComponent;
  let fixture: ComponentFixture<EnvIdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvIdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvIdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
