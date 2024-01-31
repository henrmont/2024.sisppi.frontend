import { Routes } from '@angular/router';
import { noAuthGuard } from './guards/no-auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from './guards/auth.guard';
import { authResolve } from './resolves/auth-resolve.guard';
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
    path: 'app',
    component: LayoutComponent,
    canActivateChild: [authGuard],
    resolve: {auth: authResolve, role: roleResolve},
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/home-page/home-page.component').then((m) => m.HomePageComponent),
        data: {
          title: 'Início'
        }
      },
      {
        path: 'configuracoes',
        loadComponent: () => import('./pages/settings-page/settings-page.component').then((m) => m.SettingsPageComponent),
      },
      {
        path: 'notificacoes',
        loadComponent: () => import('./pages/notifications-page/notifications-page.component').then((m) => m.NotificationsPageComponent),
      },
      {
        path: 'usuarios',
        loadComponent: () => import('./pages/users-page/users-page.component').then((m) => m.UsersPageComponent),
        canActivate: [roleGuard],
        resolve: {role: roleResolve},
        data: {
          permissions: ['usuario criar','usuario atualizar','usuario ver','usuario deletar'],
          title: 'Usuários'
        }
      },
      {
        path: 'municipios',
        loadComponent: () => import('./pages/counties-page/counties-page.component').then((m) => m.CountiesPageComponent),
        canActivate: [roleGuard],
        resolve: {role: roleResolve},
        data: {
          permissions: ['municipio criar','municipio atualizar','municipio ver','municipio deletar'],
          title: 'Municípios'
        }
      },
      {
        path: 'regras',
        loadComponent: () => import('./pages/roles-page/roles-page.component').then((m) => m.RolesPageComponent),
        canActivate: [roleGuard],
        resolve: {role: roleResolve},
        data: {
          permissions: ['regra criar','regra atualizar','regra ver','regra deletar'],
          title: 'Regras e permissões'
        }
      },
      {
        path: 'anos/de/exercicio',
        loadComponent: () => import('./pages/exercise-years-page/exercise-years-page.component').then((m) => m.ExerciseYearsPageComponent),
        canActivate: [roleGuard],
        resolve: {role: roleResolve},
        data: {
          permissions: ['ano competencia criar','ano competencia atualizar','ano competencia ver','ano competencia deletar'],
          title: 'Anos de exercício e competências'
        }
      },
      {
        path: 'procedimentos',
        loadComponent: () => import('./pages/procedures-page/procedures-page.component').then((m) => m.ProceduresPageComponent),
        canActivate: [roleGuard],
        resolve: {role: roleResolve},
        data: {
          permissions: ['procedimento criar','procedimento atualizar','procedimento ver','procedimento deletar'],
          title: 'Procedimentos'
        }
      },
      {
        path: 'grupos',
        loadComponent: () => import('./pages/groups-page/groups-page.component').then((m) => m.GroupsPageComponent),
        canActivate: [roleGuard],
        resolve: {role: roleResolve},
        data: {
          permissions: ['procedimento criar','procedimento atualizar','procedimento ver','procedimento deletar'],
          title: 'Grupos, subgrupos e formas de organização'
        }
      },
      {
        path: 'financiamentos/modalidades',
        loadComponent: () => import('./pages/financings-page/financings-page.component').then((m) => m.FinancingsPageComponent),
        canActivate: [roleGuard],
        resolve: {role: roleResolve},
        data: {
          permissions: ['procedimento criar','procedimento atualizar','procedimento ver','procedimento deletar'],
          title: 'Financiamentos e modalidades'
        }
      },
      {
        path: 'programacao',
        loadComponent: () => import('./pages/programings-page/programings-page.component').then((m) => m.ProgramingsPageComponent),
        canActivate: [roleGuard],
        resolve: {auth: authResolve, role: roleResolve},
        data: {
          permissions: ['programacao criar','programacao atualizar','programacao ver','programacao deletar'],
          title: 'Programação'
        }
      },
      {
        path: 'portarias/ministeriais',
        loadComponent: () => import('./pages/ministerial-ordinaces-page/ministerial-ordinaces-page.component').then((m) => m.MinisterialOrdinacesPageComponent),
        canActivate: [roleGuard],
        resolve: {role: roleResolve},
        data: {
          permissions: ['portaria criar','portaria atualizar','portaria ver','portaria deletar'],
          title: 'Portarias ministeriais'
        }
      },
      {
        path: 'incentivos',
        loadComponent: () => import('./pages/incentives-page/incentives-page.component').then((m) => m.IncentivesPageComponent),
        canActivate: [roleGuard],
        resolve: {role: roleResolve},
        data: {
          permissions: ['incentivo criar','incentivo atualizar','incentivo ver','incentivo deletar'],
          title: 'Incentivos'
        }
      },
      {
        path: 'carteira',
        loadComponent: () => import('./pages/wallet-page/wallet-page.component').then((m) => m.WalletPageComponent),
        canActivate: [roleGuard],
        resolve: {role: roleResolve},
        data: {
          permissions: ['carteira ver'],
          title: 'Carteira financeira'
        }
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
];
