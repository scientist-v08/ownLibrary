import { TestBed } from '@angular/core/testing';

import { UiContrService } from './ui-contr.service';

describe('UiContrService', () => {
  let service: UiContrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiContrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
