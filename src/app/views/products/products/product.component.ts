import { Component } from '@angular/core';
import { RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent } from '@coreui/angular';
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
    AgGridAngular
    
  ]
})
export class ProductsComponent {

  constructor(

  ) { }

  colDefs: ColDef[] = [
    { field: "Name" },
    { field: "Category" },
    { field: "price" },
   { field: "InStock" },
    { field: "Qty" }
  ];
  rowData = [
    { Name: "Tesla", Category: "Category Y", price: 64950, Status: true },
    { Name: "Ford", Category: "F-Series", price: 33850, Status: false },
    { Name: "Toyota", Category: "Corolla", price: 29600, Status: false },
    { Name: "Ford", Category: "F-Series", price: 33850, Status: false },
    { Name: "Toyota", Category: "Corolla", price: 29600, Status: false },
    { Name: "Ford", Category: "F-Series", price: 33850, Status: false },
    { Name: "Toyota", Category: "Corolla", price: 29600, Status: false },
    { Name: "Ford", Category: "F-Series", price: 33850, Status: false },
    { Name: "Toyota", Category: "Corolla", price: 29600, Status: false },
  ];


}
