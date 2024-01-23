import { Routes } from '@angular/router';
import { noAuthGuard } from './guards/no-auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from './guards/auth.guard';
import { authResolve } from './resolves/auth-resolve.guard';
import { titleResolve } from './resolves/title-resolve.guard';
import { roleGuard } from './guards/role.guard';
import { roleResolve } from './resolves/role-resolve.guard';

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
    path: 'home',
    component: LayoutComponent,
    canActivateChild: [authGuard],
    resolve: {auth: authResolve, title: titleResolve, role: roleResolve},
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home-page/home-page.component').then((m) => m.HomePageComponent),
      },
    ]
  },
  {
    path: 'configuracoes',
    component: LayoutComponent,
    canActivateChild: [authGuard],
    resolve: {auth: authResolve, title: titleResolve, role: roleResolve},
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/settings-page/settings-page.component').then((m) => m.SettingsPageComponent),
      },
    ]
  },
  {
    path: 'notificacoes',
    component: LayoutComponent,
    canActivateChild: [authGuard],
    resolve: {auth: authResolve, title: titleResolve, role: roleResolve},
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/notifications-page/notifications-page.component').then((m) => m.NotificationsPageComponent),
      }
    ]
  },
  {
    path: 'usuarios',
    component: LayoutComponent,
    canActivateChild: [authGuard],
    resolve: {auth: authResolve, title: titleResolve, role: roleResolve},
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/users-page/users-page.component').then((m) => m.UsersPageComponent),
        canActivate: [roleGuard],
        data: {permissions: [
          'usuario criar','usuario atualizar','usuario ver','usuario deletar'
        ]}
      }
    ]
  },
  {
    path: 'municipios',
    component: LayoutComponent,
    canActivateChild: [authGuard],
    resolve: {auth: authResolve, title: titleResolve, role: roleResolve},
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/counties-page/counties-page.component').then((m) => m.CountiesPageComponent),
        canActivate: [roleGuard],
        data: {permissions: [
          'municipio criar','municipio atualizar','municipio ver','municipio deletar'
        ]}
      }
    ]
  },
  {
    path: 'regras',
    component: LayoutComponent,
    canActivateChild: [authGuard],
    resolve: {auth: authResolve, title: titleResolve, role: roleResolve},
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/roles-page/roles-page.component').then((m) => m.RolesPageComponent),
        canActivate: [roleGuard],
        data: {permissions: [
          'regra criar','regra atualizar','regra ver','regra deletar'
        ]}
      }
    ]
  },
  {
    path: 'anos/de/exercicio',
    component: LayoutComponent,
    canActivateChild: [authGuard],
    resolve: {auth: authResolve, title: titleResolve, role: roleResolve},
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/exercise-years-page/exercise-years-page.component').then((m) => m.ExerciseYearsPageComponent),
        canActivate: [roleGuard],
        data: {permissions: [
          'ano criar','ano atualizar','ano ver','ano deletar','competencia criar','competencia atualizar','competencia ver','competencia deletar'
        ]}
      }
    ]
  },
  {
    path: 'procedimentos',
    component: LayoutComponent,
    canActivateChild: [authGuard],
    resolve: {auth: authResolve, title: titleResolve, role: roleResolve},
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/procedures-page/procedures-page.component').then((m) => m.ProceduresPageComponent),
        canActivate: [roleGuard],
        data: {permissions: [
          'procedimento criar','procedimento atualizar','procedimento ver','procedimento deletar'
        ]}
      }
    ]
  },
  {
    path: 'grupos',
    component: LayoutComponent,
    canActivateChild: [authGuard],
    resolve: {auth: authResolve, title: titleResolve, role: roleResolve},
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/groups-page/groups-page.component').then((m) => m.GroupsPageComponent),
        canActivate: [roleGuard],
        data: {permissions: [
          'procedimento criar','procedimento atualizar','procedimento ver','procedimento deletar'
        ]}
      }
    ]
  },
  {
    path: 'financiamentos/modalidades',
    component: LayoutComponent,
    canActivateChild: [authGuard],
    resolve: {auth: authResolve, title: titleResolve, role: roleResolve},
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/financings-page/financings-page.component').then((m) => m.FinancingsPageComponent),
        canActivate: [roleGuard],
        data: {permissions: [
          'procedimento criar','procedimento atualizar','procedimento ver','procedimento deletar'
        ]}
      }
    ]
  },
  {
    path: 'programacao',
    component: LayoutComponent,
    canActivateChild: [authGuard],
    resolve: {auth: authResolve, title: titleResolve, role: roleResolve},
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/programings-page/programings-page.component').then((m) => m.ProgramingsPageComponent),
        canActivate: [roleGuard],
        data: {permissions: [
          'programacao criar','programacao atualizar','programacao ver','programacao deletar'
        ]}
      }
    ]
  },

];
