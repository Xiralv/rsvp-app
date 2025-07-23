import { TestBed } from '@angular/core/testing';

import { SupaBaseApiService } from './supabase-api.service';

describe('SupabaseService', () => {
  let service: SupaBaseApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupaBaseApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
