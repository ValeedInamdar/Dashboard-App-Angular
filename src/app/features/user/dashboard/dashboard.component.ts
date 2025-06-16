import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../../auth/models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  userList: User[] = [];
  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe({
      next: (value) => {
        this.userList = value.data;
      },
      error: (err) => console.error(err),
    });
  }
}
