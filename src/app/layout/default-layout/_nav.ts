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
    url: '/product',
    iconComponent: {name: 'cil-notes' },
    children: [
      {
        name: 'Product',
        url: '/product/product_list',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Add_Product',
        url: '/product/add_product',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Add Variant',
        url: '/product/add_variant',
        icon: 'nav-icon-bullet',
      },

    ],
  },
  {
    name: 'Order',
    url: '/order',
    iconComponent: { name: 'cil-notes' },
    children: [
      
      {
        name: 'Active',
        url: '/order/active_order',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Delivered',
        url: '/order/completed_order',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Cancelled',
        url: '/order/cancelled_order',
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
