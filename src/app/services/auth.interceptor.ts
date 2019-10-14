import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    let reqUrl = environment.apiBaseUrl;
    console.log(environment);
    console.log(req);
    req = req.clone({
      headers: req.headers.set(
        "Authorization",
        "Bearer " + localStorage.getItem('token')
      ),
      url: reqUrl +""+ req.url
    });
    return next.handle(req);
  }
}