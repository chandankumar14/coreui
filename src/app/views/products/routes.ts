import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Product'
    },
    children: [
      {
        path: '',
        redirectTo: 'product_list',
        pathMatch: 'full'
      },
      {
        path: 'product_list',
        loadComponent: () => import('./products/product.component').then(m => m.ProductsComponent),
        data: {
          title: 'Product List'
        }
      },

      {
        path: 'add_product',
        loadComponent: () => import('./add_products/add-product.component').then(m => m.AddProductComponent),
        data: {
          title: 'Add Product'
        }
      },

      {
        path: 'add_variant',
        loadComponent: () => import('./add_variants/add-variant.component').then(m => m.AddVariantComponent),
        data: {
          title: 'Add product Variant'
        }
      },
    ]
  }
];


