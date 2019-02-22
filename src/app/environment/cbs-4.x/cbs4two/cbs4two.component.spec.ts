import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cbs4twoComponent } from './cbs4two.component';

describe('Cbs4twoComponent', () => {
  let component: Cbs4twoComponent;
  let fixture: ComponentFixture<Cbs4twoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cbs4twoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cbs4twoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
