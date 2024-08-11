import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Saatika',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Product',
    title: true,
  },
  {
    name: 'Product',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Product',
        url: '/base/accordion',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Product_Variant',
        url: '/base/pagination',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Add Product',
        url: '/base/placeholder',
        icon: 'nav-icon-bullet',
      },
      
    ],
  },
  {
    name: 'Order',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Order',
        url: '/buttons/buttons',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Active order',
        url: '/buttons/button-groups',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Delivered',
        url: '/buttons/dropdowns',
        icon: 'nav-icon-bullet',
      },
    ],
  },
  {
    name: 'Payment',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Form Control',
        url: '/forms/form-control',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Select',
        url: '/forms/select',
        icon: 'nav-icon-bullet',
      },
      
     
     
    ],
  },
  {
    name: 'Charts',
    iconComponent: { name: 'cil-chart-pie' },
    url: '/charts',
  },
 
  {
    name: 'Notifications',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Modal',
        url: '/notifications/modal',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Toast',
        url: '/notifications/toasts',
        icon: 'nav-icon-bullet',
      },
    ],
  },
  
 
 ];
