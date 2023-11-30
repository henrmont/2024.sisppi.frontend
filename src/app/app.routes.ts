import { Routes } from '@angular/router';
import { noAuthGuard } from './account/guards/no-auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from './account/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    canActivateChild: [noAuthGuard],
    children: [
      {
        path: 'login',
        loadComponent: () => import('./account/pages/login-account/login-account.component').then((m) => m.LoginAccountComponent),
      },
      {
        path: 'criar/conta',
        loadComponent: () => import('./account/pages/create-account/create-account.component').then((m) => m.CreateAccountComponent),
      },
      {
        path: 'recuperar/conta',
        loadComponent: () => import('./account/pages/recover-account/recover-account.component').then((m) => m.RecoverAccountComponent),
      },
      {
        path: 'redefinir/senha',
        loadComponent: () => import('./account/pages/reset-account/reset-account.component').then((m) => m.ResetAccountComponent),
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'dashboard',
    component: LayoutComponent,
    canActivateChild: [authGuard],
    children: [
      {
        path: 'principal',
        loadComponent: () => import('./dashboard/pages/main-dashboard/main-dashboard.component').then((m) => m.MainDashboardComponent),
      },
      {
        path: '',
        redirectTo: 'principal',
        pathMatch: 'full'
      }
    ]
  }
];
