import { Routes } from '@angular/router';
import { LayoutComponent } from './layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    data: {
      title: 'Home'
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

  { path: '**', redirectTo: 'dashboard' }
];
