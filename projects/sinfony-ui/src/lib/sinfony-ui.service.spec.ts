import { TestBed } from '@angular/core/testing';

import { SinfonyUiService } from './sinfony-ui.service';

describe('SinfonyUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SinfonyUiService = TestBed.get(SinfonyUiService);
    expect(service).toBeTruthy();
  });
});
