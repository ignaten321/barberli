import { TestBed } from '@angular/core/testing';

import { BarberHelpersService } from './barbers.service';

describe('BarbersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BarberHelpersService = TestBed.get(BarberHelpersService);
    expect(service).toBeTruthy();
  });
});
