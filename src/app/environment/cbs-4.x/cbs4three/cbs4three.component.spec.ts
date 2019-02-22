import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cbs4threeComponent } from './cbs4three.component';

describe('Cbs4threeComponent', () => {
  let component: Cbs4threeComponent;
  let fixture: ComponentFixture<Cbs4threeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cbs4threeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cbs4threeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
