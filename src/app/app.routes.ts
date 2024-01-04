import { Routes } from '@angular/router';
import { noAuthGuard } from './guards/no-auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from './guards/auth.guard';
import { authResolve } from './resolves/auth-resolve.guard';

export const routes: Routes = [
  {
    path: '',
    canActivateChild: [noAuthGuard],
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/account/login-account-page/login-account-page.component').then((m) => m.LoginAccountPageComponent),
      },
      {
        path: 'criar/conta',
        loadComponent: () => import('./pages/account/create-account-page/create-account-page.component').then((m) => m.CreateAccountPageComponent),
      },
      {
        path: 'recuperar/conta',
        loadComponent: () => import('./pages/account/recover-account-page/recover-account-page.component').then((m) => m.RecoverAccountPageComponent),
      },
      {
        path: 'redefinir/senha',
        loadComponent: () => import('./pages/account/reset-account-page/reset-account-page.component').then((m) => m.ResetAccountPageComponent),
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
    resolve: {auth: authResolve},
    children: [
      {
        path: 'principal',
        loadComponent: () => import('./pages/dashboard/main-dashboard-page/main-dashboard-page.component').then((m) => m.MainDashboardPageComponent),
        data: {title: 'Dashboard'}
      },
      {
        path: '',
        redirectTo: 'principal',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'settings',
    component: LayoutComponent,
    canActivateChild: [authGuard],
    resolve: {auth: authResolve},
    children: [
      {
        path: 'principal',
        loadComponent: () => import('./pages/settings/main-settings-page/main-settings-page.component').then((m) => m.MainSettingsPageComponent),
        data: {title: 'Configurações'}
      },
      {
        path: '',
        redirectTo: 'principal',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'notificacoes',
    component: LayoutComponent,
    canActivateChild: [authGuard],
    resolve: {auth: authResolve},
    children: [
      {
        path: 'todas',
        loadComponent: () => import('./pages/notification/all-notifications-page/all-notifications-page.component').then((m) => m.AllNotificationsPageComponent),
        data: {title: 'Notificações'}
      },
      {
        path: '',
        redirectTo: 'todas',
        pathMatch: 'full'
      }
    ]
  }
];
