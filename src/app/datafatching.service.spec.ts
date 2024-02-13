import { TestBed } from '@angular/core/testing';

import { DatafatchingService } from './datafatching.service';

describe('DatafatchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatafatchingService = TestBed.get(DatafatchingService);
    expect(service).toBeTruthy();
  });
});
