import { TestBed } from '@angular/core/testing';

import { InterceptorkuInterceptor } from './interceptorku.interceptor';

describe('InterceptorkuInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterceptorkuInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterceptorkuInterceptor = TestBed.inject(InterceptorkuInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
