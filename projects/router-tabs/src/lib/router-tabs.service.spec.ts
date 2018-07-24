import { TestBed, inject } from '@angular/core/testing';

import { RouterTabsService } from './router-tabs.service';

describe('RouterTabsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouterTabsService]
    });
  });

  it('should be created', inject([RouterTabsService], (service: RouterTabsService) => {
    expect(service).toBeTruthy();
  }));
});
