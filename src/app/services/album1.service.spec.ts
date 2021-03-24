import { TestBed } from '@angular/core/testing';

import { Album1Service } from './album1.service';

describe('Album1Service', () => {
  let service: Album1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Album1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
