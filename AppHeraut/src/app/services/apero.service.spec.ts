import { TestBed } from '@angular/core/testing';

import { AperoService } from './apero.service';

describe('AperoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AperoService = TestBed.get(AperoService);
    expect(service).toBeTruthy();
  });
});
