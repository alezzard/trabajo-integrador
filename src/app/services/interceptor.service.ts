import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private loginService: LoginService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.loginService.currentUserSubjectValue;
    let request = req;
    if(currentUser.token){
      request = req.clone({
        setHeaders:{
          authorization: `Bearer ${ currentUser.token }`
        }
      });
    } 
    return next.handle(request);
  }
}
