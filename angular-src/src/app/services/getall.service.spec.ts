import { TestBed, inject } from '@angular/core/testing';

import { GetallService } from './getall.service';

describe('GetallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetallService]
    });
  });

  it('should be created', inject([GetallService], (service: GetallService) => {
    expect(service).toBeTruthy();
  }));
});
