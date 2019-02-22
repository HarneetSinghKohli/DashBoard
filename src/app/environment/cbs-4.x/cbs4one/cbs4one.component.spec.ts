import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cbs4oneComponent } from './cbs4one.component';

describe('Cbs4oneComponent', () => {
  let component: Cbs4oneComponent;
  let fixture: ComponentFixture<Cbs4oneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cbs4oneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cbs4oneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
