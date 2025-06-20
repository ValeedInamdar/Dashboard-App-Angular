import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class LoginService {
  private baseUrl = `${environment.apiBaseUrl}/api/v1`;
  constructor(private http: HttpClient) {}
  loginUser(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, credentials);
  }
}
