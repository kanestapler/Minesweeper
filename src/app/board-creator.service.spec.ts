import { TestBed, inject } from '@angular/core/testing';

import { BoardCreatorService } from './board-creator.service';

describe('BoardCreatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardCreatorService]
    });
  });

  it('should be created', inject([BoardCreatorService], (service: BoardCreatorService) => {
    expect(service).toBeTruthy();
  }));
});
