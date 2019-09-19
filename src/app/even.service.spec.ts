import { TestBed } from '@angular/core/testing';

import { EvenService } from './even.service';

describe('EvenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvenService = TestBed.get(EvenService);
    expect(service).toBeTruthy();
  });
});
