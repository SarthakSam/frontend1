import { TestBed, inject } from '@angular/core/testing';

import { BooksProviderService } from './books-provider.service';

describe('BooksProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksProviderService]
    });
  });

  it('should be created', inject([BooksProviderService], (service: BooksProviderService) => {
    expect(service).toBeTruthy();
  }));
});
