import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { User } from '../../auth/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/user`);
  }

  getUserById(id: string): Observable<{ msg: string; data: User }> {
    return this.http.get<{ msg: string; data: User }>(
      `${this.baseUrl}/user/${id}`
    );
  }
}
