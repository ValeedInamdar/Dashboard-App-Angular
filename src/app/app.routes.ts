import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { authGuard } from './core/guards/auth.guard';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'landing',
        loadComponent: () =>
          import('../app/features/home/landing/landing.component').then(
            (m) => m.LandingComponent
          ),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('../app/features/user/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../app/features/user/profile/profile.component').then(
            (m) => m.ProfileComponent
          ),
      },
      {
        path: 'products',
        loadComponent: () =>
          import(
            './features/product/product-dashboard/product-dashboard.component'
          ).then((m) => m.ProductDashboardComponent),
      },
      {
        path: 'products/add',
        loadComponent: () =>
          import(
            './features/product/product-create/product-create.component'
          ).then((m) => m.ProductCreateComponent),
      },
      {
        path: 'products/edit/:id',
        loadComponent: () =>
          import(
            './features/product/product-create/product-create.component'
          ).then((m) => m.ProductCreateComponent),
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
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full', // redirect from `/` inside layout to `/dashboard`
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
