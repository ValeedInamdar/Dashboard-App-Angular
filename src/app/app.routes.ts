import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { authGuard } from './core/guards/auth.guard';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../app/features/home/landing/landing.component').then(
            (m) => m.LandingComponent
          ),
      },
      {
        path: 'user-dashboard',
        canActivate: [authGuard],
        loadComponent: () =>
          import('../app/features/user/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('../app/features/auth/login/login.component').then(
            (m) => m.LoginComponent
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('../app/features/auth/register/register.component').then(
            (m) => m.RegisterComponent
          ),
      },
      {
        path: 'close-window',
        loadComponent: () =>
          import('../app/shared/close-window/close-window.component').then(
            (m) => m.CloseWindowComponent
          ),
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
