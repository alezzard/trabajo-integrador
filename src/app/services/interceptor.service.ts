import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private loginService: LoginService) {
    console.log("interceptor corriendo:")
   }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var currentUser = this.loginService.currentUserSubjectValue;
    let request = req;
    
    console.log("Interceptor          currentUser:" +
                  JSON.stringify(currentUser))

    if(currentUser && currentUser.token){
      request = req.clone({
        setHeaders:{
          authorization: `Bearer ${ currentUser.token }`
        }
      });
    } 
    console.log("interceptor         next.handler:    (currentUser)" + 
                JSON.stringify(currentUser))
    return next.handle(request);
  }
}
