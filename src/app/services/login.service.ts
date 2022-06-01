import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL = 'http://localhost:8080/login'
  currentUserSubject: BehaviorSubject<any>;
  constructor(private http: HttpClient ) {
    console.log("LoginService corriendo");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem("currentUser")||'{}'));
   }


   
  login(user: any): Observable<any>{
    return this.http.post(this.URL,user).pipe(map(data =>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
      }));
  }

 
  get currentUserSubjectValue(){
    console.log("loginService        get currentUserSubjectValue         :" +
    JSON.stringify(this.currentUserSubject.value))
    return this.currentUserSubject.value;
  }
 
  loggedIn() {
    if (sessionStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  getToken(){
    return sessionStorage.getItem('token');
  }

  logout() {
    sessionStorage.removeItem('token');
  }
}