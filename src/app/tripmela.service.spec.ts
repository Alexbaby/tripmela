import { TestBed } from '@angular/core/testing';

import { TripmelaService } from './tripmela.service';

describe('TripmelaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TripmelaService = TestBed.get(TripmelaService);
    expect(service).toBeTruthy();
  });
});
