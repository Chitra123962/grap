import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalsComponent } from './cals.component';

describe('CalsComponent', () => {
  let component: CalsComponent;
  let fixture: ComponentFixture<CalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
