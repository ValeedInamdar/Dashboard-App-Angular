import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private baseUrl = `${environment.apiBaseUrl}/api/v1`;
  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/auth/register`, user);
  }
}
