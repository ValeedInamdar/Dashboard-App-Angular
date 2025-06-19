import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../../auth/models/user.model';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'user',
  };
  userId: string | null;
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {
    this.userId = this.authService.getUserId();
  }
  ngOnInit(): void {
    this.userService.getUserById(this.userId!).subscribe({
      next: (user) => {
        this.user = user.data;
      },
      error: (err) => console.error(err),
    });
  }
}
