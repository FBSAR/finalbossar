import { TestBed } from '@angular/core/testing';

import { JobAppService } from './job-app.service';

describe('JobAppService', () => {
  let service: JobAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
