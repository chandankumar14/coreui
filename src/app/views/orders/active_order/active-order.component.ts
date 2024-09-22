import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  RowComponent,
  FormDirective,
  ColComponent,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
} from '@coreui/angular';
import { AgGridAngular } from 'ag-grid-angular';
import { GridApi, GridReadyEvent, IFilterParams } from 'ag-grid-community';
import { ColDef } from 'ag-grid-community';
@Component({
  selector: 'app-active-order',
  templateUrl: './active-order.component.html',
  styleUrls: ['./active-order.component.scss'],
  standalone: true,
  imports: [
    RowComponent,
    ReactiveFormsModule,
    FormDirective,
    AgGridAngular,
    CardComponent,
    CardHeaderComponent,
    ColComponent,
    CardBodyComponent,
  ],
})
export class ActiveOrderComponent implements OnInit {
 
  rowClass: string | undefined;
  private gridApi!: GridApi<any>;
  constructor() {}
  ngOnInit() {}
  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    if (this.rowData) {
      this.gridApi
    }
  }

  colDefs: ColDef[] = [
    { field: "orderId" },
    { field: "product" },
    { field: "price" },
    { field: "userName" },
    { field: "Status" }
  ];
  rowData = [
    {orderId:"AK635", product: "Tesla", userName: " Y", price: 64950, Status: true },
    {orderId:"AK635", product: "Ford", userName: "F-Series", price: 33850, Status: false },
    {orderId:"AK635", product: "Toyota", userName: "Corolla", price: 29600, Status: false },
    { orderId:"AK635",product: "Ford", userName: "F-Series", price: 33850, Status: false },
    {orderId:"AK635", product: "Toyota", userName: "Corolla", price: 29600, Status: false },
    { orderId:"AK635",product: "Ford", userName: "F-Series", price: 33850, Status: false },
    {orderId:"AK635", product: "Toyota", userName: "Corolla", price: 29600, Status: false },
    {orderId:"AK635", product: "Ford", userName: "F-Series", price: 33850, Status: false },
    {orderId:"AK635", product: "Toyota", userName: "Corolla", price: 29600, Status: false },
  ];
  
}
