import { HttpInterceptorFn } from '@angular/common/http';

export const backendInterceptor: HttpInterceptorFn = (req, next) =>
{
  if (req.url.startsWith('/api/'))
  {
    req = req.clone({
      url: `http://localhost:3000${req.url}`
    });


  }

  return next(req);
};
