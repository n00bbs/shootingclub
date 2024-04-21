import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default/default.layout';
import { MembersPageComponent } from './pages/members/members.page';
import { DashboardPageComponent } from './pages/dashboard';
import { DepartmentsPageComponent } from './pages/departments';
import { ProfilePageComponent } from './pages/profile';
import { UsersPageComponent } from './pages/users';
import { WeaponsPageComponent } from './pages/weapons';

import { MembersDetailComponent } from './components/members-detail/members-detail.component';

export const routes: Routes = [
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
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'departments', component: DepartmentsPageComponent },
      {
        path: 'members',
        component: MembersPageComponent,
        children: [{ path: ':id', component: MembersDetailComponent }],
      },
      { path: 'profile', component: ProfilePageComponent },
      { path: 'users', component: UsersPageComponent },
      { path: 'weapons', component: WeaponsPageComponent },
    ],
  },
];
