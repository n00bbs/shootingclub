import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default/default.layout';
import { MembersPageComponent } from './pages/members/members.page';
import { DashboardPageComponent } from './pages/dashboard';
import { DepartmentsPageComponent } from './pages/departments';
import { ProfilePageComponent } from './pages/profile';
import { WeaponsPageComponent } from './pages/weapons';

import { MembersDetailComponent } from './components/members-detail/members-detail.component';
import { LoginPageComponent } from './pages/login/login.page';
import { IsAuthenticatedGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: '',
    canActivate: [IsAuthenticatedGuard],
    children: [
      {
        path: 'privacy-policy',
        redirectTo: 'https://google.com/search?q=datenschutz',
      },
      {
        path: 'imprint',
        redirectTo: 'https://google.com/search?q=impressum',
      },
      {
        path: '',
        component: DefaultLayoutComponent,
        children: [
          { path: 'dashboard', component: DashboardPageComponent },
          { path: 'profile', component: ProfilePageComponent },
          { path: 'departments', component: DepartmentsPageComponent },
          {
            path: 'members',
            component: MembersPageComponent,
            children: [{ path: ':id', component: MembersDetailComponent }],
          },
          { path: 'weapons', component: WeaponsPageComponent },
        ],
      },
    ],
  },
];
