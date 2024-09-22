import { Component } from '@angular/core';
import {
  RowComponent,
  ColComponent,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
} from '@coreui/angular';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  imports: [
    RowComponent,
    ColComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    AgGridAngular,
  ],
})
export class ProductsComponent {
  constructor() {}

  colDefs: ColDef[] = [
    {
      headerName: 'Product Name',
      field: 'Name',
      sortable: true,
      resizable: true,
      wrapHeaderText: true,
      autoHeaderHeight: true,
      cellClass: 'grid-cell-centered',
      flex: 1,
      minWidth: 150,
    },
    {
      headerName: 'Category',
      field: 'Category',
      sortable: true,
      resizable: true,
      wrapHeaderText: true,
      autoHeaderHeight: true,
      cellClass: 'grid-cell-centered',
      flex: 1,
      minWidth: 150,
    },
    {
      headerName: 'Price',
      field: 'price',
      sortable: true,
      resizable: true,
      wrapHeaderText: true,
      autoHeaderHeight: true,
      cellClass: 'grid-cell-centered',
      flex: 1,
      minWidth: 150,
    },
    
    {
      headerName: 'Quantity',
      field: 'qty',
      sortable: true,
      resizable: true,
      wrapHeaderText: true,
      autoHeaderHeight: true,
      cellClass: 'grid-cell-centered',
      flex: 1,
      minWidth: 150,
    },
    {
      headerName: 'Status',
      field: 'Status',
      sortable: true,
      resizable: true,
      wrapHeaderText: true,
      autoHeaderHeight: true,
      cellClass: 'grid-cell-centered',
      flex: 1,
      minWidth: 150,
    },
  ];
  rowData = [
    { Name: 'Tesla', Category: 'Category Y', qty: 64950, price: 64950, Status: true },
    { Name: 'Ford', Category: 'F-Series',qty: 64950, price: 33850, Status: false },
    { Name: 'Toyota', Category: 'Corolla',qty: 64950, price: 29600, Status: false },
    { Name: 'Ford', Category: 'F-Series', qty: 64950,price: 33850, Status: false },
    { Name: 'Toyota', Category: 'Corolla',qty: 64950, price: 29600, Status: false },
    { Name: 'Ford', Category: 'F-Series',qty: 64950, price: 33850, Status: false },
    { Name: 'Toyota', Category: 'Corolla',qty: 64950, price: 29600, Status: false },
    { Name: 'Ford', Category: 'F-Series',qty: 64950, price: 33850, Status: false },
    { Name: 'Toyota', Category: 'Corolla',qty: 64950, price: 29600, Status: false },
  ];
}
