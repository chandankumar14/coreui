import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'P',
    title: true,
  },
  {
    name: 'P',
    url: '/product',
    iconComponent: {name: 'cil-notes' },
    children: [
      {
        name: 'P',
        url: '/product/product_list',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Add',
        url: '/product/add_product',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Add',
        url: '/product/add_variant',
        icon: 'nav-icon-bullet',
      },

    ],
  },
  {
    name: 'O',
    url: '/order',
    iconComponent: { name: 'cil-notes' },
    children: [
      
      {
        name: 'Active',
        url: '/order/active_order',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'D',
        url: '/order/completed_order',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'C',
        url: '/order/cancelled_order',
        icon: 'nav-icon-bullet',
      },
    ],
  },
  {
    name: 'Pay',
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
