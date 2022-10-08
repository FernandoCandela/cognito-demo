import { TestBed } from '@angular/core/testing';

import { ProfileGuardGuard } from './profile-guard.guard';

describe('ProfileGuardGuard', () => {
  let guard: ProfileGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProfileGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
