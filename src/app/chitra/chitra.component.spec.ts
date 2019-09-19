import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitraComponent } from './chitra.component';

describe('ChitraComponent', () => {
  let component: ChitraComponent;
  let fixture: ComponentFixture<ChitraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
