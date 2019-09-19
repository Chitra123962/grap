import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mult3Component } from './mult3.component';

describe('Mult3Component', () => {
  let component: Mult3Component;
  let fixture: ComponentFixture<Mult3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mult3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mult3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
