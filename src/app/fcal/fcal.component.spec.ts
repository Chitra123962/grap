import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcalComponent } from './fcal.component';

describe('FcalComponent', () => {
  let component: FcalComponent;
  let fixture: ComponentFixture<FcalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
