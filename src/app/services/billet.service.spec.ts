import { TestBed, inject } from '@angular/core/testing';

import { BilletService } from './billet.service';

describe('BilletService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BilletService]
    });
  });

  it('should be created', inject([BilletService], (service: BilletService) => {
    expect(service).toBeTruthy();
  }));
});
