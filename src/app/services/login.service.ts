import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL = 'http://localhost:8080/login'

  constructor(private http: HttpClient ) { }

  login(user: any): Observable<any>{
    return this.http.post(this.URL,user);
  }

  setToken(token: string){
    sessionStorage.setItem("token",token)
  }

  getToken(){
    return sessionStorage.getItem("token");
  }
}