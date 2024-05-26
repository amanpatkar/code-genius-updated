import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { createUser, fetchUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  updateLogin = new Subject();
  serviceUrl = "http://localhost:3000/"
  constructor(private http:HttpClient) { }

  createUser(payload:createUser){
   return this.http.post<createUser>(`${this.serviceUrl}api/v1/user/sign-up`,payload);
  }
  loginUser(payload:fetchUser){
    return this.http.post<fetchUser>(`${this.serviceUrl}api/v1/user/login`,payload);
  }
}
