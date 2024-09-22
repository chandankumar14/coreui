import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
  },

  {
    name: 'Product',
    url: '/product',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Product',
        url: '/product/product_list',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'New Products',
        url: '/product/add_product',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Variants',
        url: '/product/add_variant',
        icon: 'nav-icon-bullet'
      },


    ]
  },
  {
    name: 'Orders',
    url: '/orders',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Active Orders',
        url: '/orders/active_order',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Delivered',
        url: '/orders/completed_order',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Cancelled',
        url: '/orders/cancelled_order',
        icon: 'nav-icon-bullet'
      },


    ]
  },
  {
    name: 'Payments',
    // url: '/product',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'payment',
        icon: 'nav-icon-bullet'
      },
    ]
  },

  {
    name: 'Offers',
    url: '/product',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Add Offer',
       icon: 'nav-icon-bullet'
      },
      {
        name: 'Delete',
        icon: 'nav-icon-bullet'
      },
    ]
  },

  {
    name: 'Banners',
    url: '/product',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Add Banner',
       icon: 'nav-icon-bullet'
      },
      {
        name: 'Delete',
      icon: 'nav-icon-bullet'
      },
    ]
  },
 

];
