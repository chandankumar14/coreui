import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Orders'
    },
    children: [
      {
        path: '',
        redirectTo: 'active_order',
        pathMatch: 'full'
      },
      {
        path: 'active_order',
        loadComponent: () => import('./active_order/active-order.component').then(m => m.ActiveOrderComponent),
        data: {
          title: 'Active order'
        }
      },
      {
        path: 'completed_order',
        loadComponent: () => import('./completed_order/completed-order.component').then(m => m.CompletedOrderComponent),
        data: {
          title: 'Completed Order'
        }
      },
      {
        path: 'cancelled_order',
        loadComponent: () => import('./cancelled_order/cancelled-order.component').then(m => m.CancelledOrderComponent),
        data: {
          title: 'Cancelled order'
        }
      },
    ]
  }
];
