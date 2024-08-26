import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Customers'
    },
    children: [
      {
        path: '',
        redirectTo: 'customers',
        pathMatch: 'full'
      },
      {
        path: 'customers',
        loadComponent: () => import('./customer/customer.component').then(m => m.ButtonsComponent),
        data: {
          title: 'customers'
        }
      },
      
      
    ]
  }
];

