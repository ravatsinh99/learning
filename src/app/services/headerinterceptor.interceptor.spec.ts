import { TestBed } from '@angular/core/testing';

import { HeaderinterceptorInterceptor } from './headerinterceptor.interceptor';

describe('HeaderinterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HeaderinterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HeaderinterceptorInterceptor = TestBed.inject(HeaderinterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
