import { TestBed } from '@angular/core/testing';

import { NgxCubeLoaderService } from './ngx-cube-loader.service';

describe('NgxCubeLoaderService', () => {
  let service: NgxCubeLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCubeLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
