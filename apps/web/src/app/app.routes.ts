import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default/default.layout';

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
    children: [],
  },
];
