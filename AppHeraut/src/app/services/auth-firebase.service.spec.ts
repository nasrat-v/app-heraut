import { TestBed } from '@angular/core/testing';

import { AuthFirebaseService } from './auth-firebase.service';

describe('AuthFirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthFirebaseService = TestBed.get(AuthFirebaseService);
    expect(service).toBeTruthy();
  });
});
