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
    return this.currentUserSubject.value;
  }
 
  loggedIn() {
    if (sessionStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

  
  logout() {
    sessionStorage.removeItem('currentUser');
  }
}