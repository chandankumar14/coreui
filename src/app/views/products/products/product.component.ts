import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  RowComponent,
  ColComponent,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
} from '@coreui/angular';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef,ICellRendererParams  } from 'ag-grid-community';
import { environment } from 'src/app/environments/environment';
import { PRODUCT } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
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
    RouterLink,
  ],
})
export class ProductsComponent implements OnInit {
  ProductList: PRODUCT[] = []
  BasePath = environment.imageBase
  constructor(private productService: ProductService) {

  }
  ngOnInit() {
    this.getAllPrroductList()
   }
  colDefs: ColDef[] = [
    {
      headerName: 'Product',
      field: 'modelFrontShot',
      cellRenderer: (params:ICellRendererParams) => {
        return `<img src="${this.BasePath}/${params.value}" alt="Product Image" style="width: 80px; height: 50px;" />`;
      },
      sortable: false,
      resizable: true,
      wrapHeaderText: true,
      autoHeaderHeight: true,
      cellClass: 'grid-cell-centered',
      flex: 1,
      minWidth: 100,
    },
    {
      headerName: 'Product Name',
      field: 'productName',
      sortable: true,
      resizable: true,
      wrapHeaderText: true,
      autoHeaderHeight: true,
      cellClass: 'grid-cell-centered',
      flex: 1,
      minWidth: 150,
    },
    {
      headerName: 'productSize',
      field: 'productSize',
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
      field: 'quantity',
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
      field: 'isDeleted',
      sortable: true,
      resizable: true,
      wrapHeaderText: true,
      autoHeaderHeight: true,
      cellClass: 'grid-cell-centered',
      flex: 1,
      minWidth: 150,
    },
    {
      headerName: 'In Stoack',
      field: 'inStock',
      sortable: true,
      resizable: true,
      wrapHeaderText: true,
      autoHeaderHeight: true,
      cellClass: 'grid-cell-centered',
      flex: 1,
      minWidth: 150,
    },
  ];

  getAllPrroductList() {
    this.productService.getAllPrroductList().subscribe(res => {
      this.ProductList = res.data
    })
  }
}
