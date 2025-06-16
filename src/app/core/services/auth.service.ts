import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private decodedToken: any = null;
  constructor(private http: HttpClient) {}

  storeToken(token: string) {
    localStorage.setItem('jwt', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  logout() {
    localStorage.removeItem('jwt');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getDecodedToken() {
    if (!this.decodedToken) {
      const token = this.getToken();
      if (token) {
        this.decodedToken = jwtDecode(token);
      }
    }
    return this.decodedToken;
  }

  getUserId(): string | null {
    return this.getDecodedToken()?.id || null;
  }
}
