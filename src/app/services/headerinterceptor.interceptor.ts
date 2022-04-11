import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable()
export class HeaderinterceptorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const api_key = 'hello123'
    const req = request.clone({
      setHeaders: {
        api_key
      }
    })
    return next.handle(req).pipe(
      map((res: HttpEvent<any>) => {
        if (res instanceof HttpResponse) {
          // change the response body here
          res.body['length']=1000;
          return res.clone({
            body: res.body,
            // body: {
            //   value: res.body,
            //   key: 'key'
            // }
          });
        }
        return res;
      })
    );
  }
}
