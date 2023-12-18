import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingupRequest } from '../../signup/singup-request';
import { Observable, map } from 'rxjs';
import { LoginRequest } from '../../login/login-request';
import { LoginResponse } from '../../login/login-response';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http:HttpClient) { }

  signup( signupRequest: SingupRequest): Observable<any> {
    return this.http.post('http://localhost:3000/auth/signup', signupRequest, {responseType:'text'});
  }

  login(loginRequestPayload: LoginRequest): Observable<boolean> {
    return this.http.post<LoginResponse>('http://localhost:3000/auth/login', loginRequestPayload)
      .pipe(map(data => {
        localStorage.setItem('authenticationToken', data.token);
        localStorage.setItem('username', data.username);
        // localStorage.setItem('refreshToken', data.refreshToken);
        // localStorage.setItem('expiredAt', data.expiredAt as string);
        return true;
      }));
  }

}
