import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { LoginService } from '../services/login.service';

interface Credentials {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router
  ) {}

  // handle form submit
  onSubmit(form: NgForm) {
    const credentials: Credentials = form.value;
    this.loginService.loginUser(credentials).subscribe({
      next: (value) => {
        this.authService.storeToken(value.token);
        alert('Login Successful');
        this.router.navigate(['/user-dashboard']);
      },
      error: (err) => alert('Login failed'),
    });
  }

  resetForm(form: NgForm) {
    form.resetForm();
  }
}
