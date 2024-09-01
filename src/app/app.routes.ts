import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LoginComponent,
    data: {
      title: 'Login'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
      },
      {
        path: 'product',
        loadChildren: () => import('./views/products/routes').then((m) => m.routes)
      },
      {
        path: 'customer',
        loadChildren: () => import('./views/customers/routes').then((m) => m.routes)
      },
      {
        path: 'forms',
        loadChildren: () => import('./views/orders/routes').then((m) => m.routes)
      },

      {
        path: 'order',
        loadChildren: () => import('./views/orders/routes').then((m) => m.routes)
      },

    ]
  },

  { path: '**', redirectTo: 'login' }
];
